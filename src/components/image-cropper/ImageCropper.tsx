import React, { useState, useRef } from 'react';
import 'react-image-crop/dist/ReactCrop.css'
import { canvasPreview } from '../../image-crop/canvasPreview';
import { useDebounceEffect } from '../../image-crop/useDebounceEffect';
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop } from 'react-image-crop';
import InputImage from '../input-image/InputImage';
import CropTools from '../crop-tools/CropTools';
import CroppedImage from '../croped-image/CroppedImage';

function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number,
) {
    return centerCrop(
        makeAspectCrop(
            {
                unit: '%',
                width: 90,
            },
            aspect,
            mediaWidth,
            mediaHeight,
        ),
        mediaWidth,
        mediaHeight,
    )
}

const ImageCropper = () => {

    const [imgSrc, setImgSrc] = useState('')
    const previewCanvasRef = useRef<HTMLCanvasElement>(null)
    const imgRef = useRef<HTMLImageElement>(null)
    const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)
    const blobUrlRef = useRef('')
    const [crop, setCrop] = useState<Crop>()
    const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
    const [scale, setScale] = useState(1)
    const [rotate, setRotate] = useState(0)
    const [aspect, setAspect] = useState<number | undefined>(16 / 9)


    function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            setCrop(undefined) // Makes crop preview update between images.
            const reader = new FileReader()
            reader.addEventListener('load', () =>
                setImgSrc(reader.result?.toString() || ''),
            )
            reader.readAsDataURL(e.target.files[0])
        }
    }

    function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
        if (aspect) {
            const { width, height } = e.currentTarget
            setCrop(centerAspectCrop(width, height, aspect))
        }
    }

    function onDownloadCropClick() {
        if (!previewCanvasRef.current) {
            throw new Error('Crop canvas does not exist')
        }

        previewCanvasRef.current.toBlob((blob) => {
            if (!blob) {
                throw new Error('Failed to create blob')
            }
            if (blobUrlRef.current) {
                URL.revokeObjectURL(blobUrlRef.current)
            }
            blobUrlRef.current = URL.createObjectURL(blob)
            hiddenAnchorRef.current!.href = blobUrlRef.current
            hiddenAnchorRef.current!.click()
        })
    }

    useDebounceEffect(
        async () => {
            if (
                completedCrop?.width &&
                completedCrop?.height &&
                imgRef.current &&
                previewCanvasRef.current
            ) {
                // We use canvasPreview as it's much faster than imgPreview.
                canvasPreview(
                    imgRef.current,
                    previewCanvasRef.current,
                    completedCrop,
                    scale,
                    rotate,
                )
            }
        },
        100,
        [completedCrop, scale, rotate],
    )

    function handleToggleAspectClick() {
        if (aspect) {
            setAspect(undefined)
        } else if (imgRef.current) {
            const { width, height } = imgRef.current
            setAspect(16 / 9)
            setCrop(centerAspectCrop(width, height, 16 / 9))
        }
    }

    return (
        <section className='py-8 md:py-12'>
            <div>
                <InputImage onSelectFile={onSelectFile}></InputImage>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mx-2 md:mx-8 py-8 md:py-12'>

                <div className={`mx-4 col-span-2 ${imgSrc && "border"}`}>
                    {
                        !!imgSrc && (
                            <div className="Crop-Controls my-5">
                                <CropTools
                                    scale={scale}
                                    setScale={setScale}
                                    rotate={rotate}
                                    setRotate={setRotate}
                                    imgSrc={imgSrc}
                                    handleToggleAspectClick={handleToggleAspectClick}
                                    aspect={aspect}
                                ></CropTools>
                            </div>
                        )
                    }
                    {!!imgSrc && (
                        <div className='flex justify-center items-center'>
                            <div className='my-8 md:my-12'>
                                <ReactCrop
                                    crop={crop}
                                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                                    onComplete={(c) => setCompletedCrop(c)}
                                    aspect={aspect}
                                >
                                    <img
                                        ref={imgRef}
                                        alt="Crop me"
                                        src={imgSrc}
                                        style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                                        onLoad={onImageLoad}
                                    />
                                </ReactCrop>
                            </div>
                        </div>
                    )}
                </div>
                <div className='mx-4 col-span-1'>
                    {!!completedCrop && (
                        <div className='flex flex-col justify-center items-center '>

                            <CroppedImage
                                completedCrop={completedCrop}
                                previewCanvasRef={previewCanvasRef}
                                onDownloadCropClick={onDownloadCropClick}
                                hiddenAnchorRef={hiddenAnchorRef}
                            ></CroppedImage>

                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ImageCropper;
import { useState } from "react";
import { storage } from '../firebase/firebase_config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { SketchPicker, ChromePicker } from 'react-color'
import './UploadImage.css'

function UploadImage() {
    const [imgUrl, setImgUrl] = useState(null);
    const [progresspercent, setProgresspercent] = useState(0);
    const [path, setPath] = useState(null)
    const [color, setColor] = useState("lightblue");
    const [hidden, setHidden] = useState(false);
    const pickerStyle = {
        default: {
            picker: {
                position: "absolute",
                bottom: "30px",
                left: "100px"
            }
        }
    };

    function sendtoml() {
        function PostRequest() {
            fetch('http://127.0.0.1:8000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Methods': 'POST',
                    'Access-Control-Allow-Headers': 'Content-Type',
                    "Access-Control-Allow-Origin" : 'http://127.0.0.1:8000/predict'
                },
                body: JSON.stringify(
                    {
                        color: color,
                        url: imgUrl
                    }
                ),
                mode: 'cors',
            })
                .then(response => response.json())
                .then(data => {
                    setPath(data.output)
                    console.log('Output:', data.output);
                    setPath('../../../backend/uc_hack_20-master/uc_hack_20-master/public/edited/image44.jpg')
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        }

        console.log(color)
        console.log(imgUrl)
        PostRequest()
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(color)
        const file = e.target[0]?.files[0]
        if (!file) return;
        const storageRef = ref(storage, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);


        uploadTask.on("state_changed",
            (snapshot) => {
                const progress =
                    Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
            },
            (error) => {
                alert(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL)
                });
            }
        );
    }



    return (
        <div className="uploadImage">
            <form onSubmit={handleSubmit} className='uploadImage-form'>
                <input type='file' />

                {/* <SketchPicker
                    width={200}
                    height={200}
                    color="#ff0000"
                    onChange={(color) => console.log(color)}
                    onChangeComplete={(color, event) => console.log(color)}
                />
                <ChromePicker
                    color="#ff0000"
                    onChangeComplete={handleChangeComplete}
                    disableAlpha={true}
                /> */}
                <button type='submit'>Upload</button>
            </form>
            {hidden && (
                <SketchPicker
                    styles={pickerStyle}
                    color={color}
                    onChange={(updatedColor) => {
                        setColor(updatedColor.hex)
                        setTimeout(sendtoml, 3000)
                        // sendtoml()
                    }}
                />
            )}

            <button type="none" onClick={() => setHidden(!hidden)}>
                {hidden ? "Close Color Picker" : "Open Color Picker"}
            </button>
            {
                !imgUrl &&
                <div className='uploadImage-outerbar'>
                    <div className='uploadimage-innerbar' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                </div>
            }
            {
                imgUrl &&
                <div className='uploadImage-outerbar'>
                    <img src={imgUrl} alt='uploaded file' height={200} />
                </div>
            }
            {
                path?
                <div className="processedimg">
                    <img src={path} alt="Processed Image" />
                </div>:
                null
            }

        </div>
    );
}
export default UploadImage;
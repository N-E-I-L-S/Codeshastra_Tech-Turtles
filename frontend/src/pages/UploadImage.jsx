import { useState } from "react";
import { storage } from '../firebase/firebase_config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { SketchPicker, ChromePicker } from 'react-color'
// import './UploadImage.css'
import image44 from "./image44.jpg"
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
                    'Content-Type': 'application/json; charset=UTF-8',
                    'Access-Control-Allow-Methods': 'POST',
                    // 'Access-Control-Allow-Headers': 'Content-Type',
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
                    setPath(data.result)
                    console.log('Output:', data.result);
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
                    sendtoml()
                });
            }
        );
    }

    return (
        <>
            <div className="flex w-screen p-2 h-screen justify-evenly">
                <div className="w-5/12 bg-blue-200 rounded-lg text-center p-10 "><h1 className=" font-bold text-2xl"> Upload Your image here</h1>
                    <div class="m-4 mx-auto w-96">
                        <form onSubmit={handleSubmit} className='uploadImage-form'>

                            <input
                                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 -200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                                type="file"
                                id="formFile" />
                            {
                                !imgUrl &&
                                <div className=''>
                                    <div className='' style={{ width: `${progresspercent}%` }}>{progresspercent}%</div>
                                </div>
                            }
                            <button type='submit' className=' p-3 mt-4 mb-3 mx-auto btn bg-primary rounded-lg shadow-lg'>Upload</button>
                        </form>
                            <button type="submit" className="text-blue-600 mx-5">Reset Image</button>

                    </div>

                    <div className="m-2 border shadow-lg rounded-lg ">
                        {
                            imgUrl &&
                            <div className=''>
                                <img className="shadow-lg rounded-lg" src={imgUrl} alt='uploaded file' height={200} />
                            </div>
                        }
                    </div>
                    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="none" onClick={() => setHidden(!hidden)}>
                        {hidden ? "Close Color Picker" : "Open Color Picker"}
                    </button>
                </div>


                <div className="w-5/12 bg-pink-200 rounded-lg text-center p-10 "><h1 className=" font-bold text-2xl"> Here is the result</h1>
                    <div className="m-2 border border-blue-500 shadow-lg rounded-lg ">
                        {
                            path ?
                                <div className="">
                                    {console.log(path)}
                                    <img style={{ height: '30vh', width: '100%' }} src={image44} alt="Processed Image" />
                                </div> :
                                null
                        }
                    </div>
                </div>


            </div >

            <div className="uploadImage">
                {hidden && (
                    <SketchPicker
                        styles={pickerStyle}
                        color={color}
                        onChange={(updatedColor) => {
                            setColor(updatedColor.hex)
                            // setTimeout(sendtoml, 3000)
                            // sendtoml()
                        }}
                    />
                )}
            </div>
        </>
    );
}
export default UploadImage;
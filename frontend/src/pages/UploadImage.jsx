import { useState } from "react";
import { storage } from '../firebase/firebase_config';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { SketchPicker, ChromePicker } from 'react-color'
// import './UploadImage.css'
import image44 from "./image44.jpg"import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'
import img4 from '../assets/img4.jpg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import img9 from '../assets/img9.jpg'
import img10 from '../assets/img10.jpg'
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

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

        // axios.post('http://localhost:8000/predict', JSON.stringify(            {
        //         color: color,
        //         url: imgUrl
        //     }))
        //     .then(response => {
        //         console.log('Output:', response.data.output);
        //     })
        //     .catch(error => {
        //         console.error('Error:', error);
        //     });


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

            <div className=" mx-auto w-11/12 border border-red rounded-lg ">
                <h1>Select a Photo to Paint </h1>
                <h5>Check out some demo images to try out our feature</h5>
                <div className="flex flex-row justify-center">

                    {
                        images.map((image, index) => {

                            return (
                                <img src={{ image } + ".jpg"} alt="demo" height={200} />
                            )
                        })
                    }

                </div>








            </div>


            <div className="p-10">
                <form onSubmit={handleSubmit} className=''>

                    <div class="mb-3 w-96">
                        <label
                            for="formFile"
                            class="mb-2 inline-block text-neutral-700 dark:text-neutral-600"
                        >Chooose file to upload</label>
                        <input
                            class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                            type="file"
                            id="formFile" />
                    </div>


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
                        // setTimeout(sendtoml, 3000)
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
                path ?
                    <div className="processedimg">
                        {console.log(path)}
                        <img style={{height : '30vh', width : '100%' }} src={image44} alt="Processed Image" />
                    </div> :
                    null
            }

        </div>
    );
}
export default UploadImage;
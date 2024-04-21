import { useState } from "react"
import Swal from 'sweetalert2'
import 'sweetalert2/src/sweetalert2.scss'
import "./panel.scss"


function Panel() {

    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [rating, setRating] = useState('');
    const [new2, setNew] = useState('');
    const [old, setOld] = useState('');
    const [info, setInfo] = useState('');
    const [desc, setDesc] = useState('');



    function Submit(evt) {

        evt.preventDefault()


        if (name == '' && img == '' && rating == '' && new2 == '' && old == '' && info == '' && desc == '')
        {

            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })

        } else
        {

            const data = { name, img, rating, 'new_price': new2, 'old_price': old, info, desc }


            fetch('https://64c510e7c853c26efada7299.mockapi.io/product/product', {
                // get, post, put, patch, delete 
                // bularni CRUD dep deyiladi
                // C = Create = post
                // R = Read = Get
                // U = Update = Put | Patch
                // D = delete = delete

                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)

            }).then((res) => {
                console.log(res);
                setName('')
                setImg('')
                setRating('')
                setNew('')
                setOld('')
                setInfo('')
                setDesc('')

            })

            if (name !== '' && img !== '' && rating !== '' && new2 !== '' && old !== '' && info !== '' && desc !== '')
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href="">Why do I have this issue?</a>'
                })
            }
        }
    }
    return (
        <>
            <div className="container">
                <form className="inputs">
                    <input className="item-1" type="text" placeholder="name" value={name} onChange={(evt) => {
                        setName(evt.target.value);
                    }} />
                    <input className="item-2" type="text" placeholder="img" value={img} onChange={(evt) => {
                        setImg(evt.target.value);
                    }} />
                    <input className="item-3" type="text" placeholder="rating" value={rating} onChange={(evt) => {
                        setRating(evt.target.value);
                    }} />
                    <input className="item-4" type="text" placeholder="new-price" value={new2} onChange={(evt) => {
                        setNew(evt.target.value);
                    }} />
                    <input className="item-5" type="text" placeholder="old-price" value={old} onChange={(evt) => {
                        setOld(evt.target.value);
                    }} />
                    <input className="item-6" type="text" placeholder="info" value={info} onChange={(evt) => {
                        setInfo(evt.target.value);
                    }} />
                    <input className="item-7" type="text" placeholder="desc" value={desc} onChange={(evt) => {
                        setDesc(evt.target.value);
                    }} />

                </form>

                <button onClick={Submit}>
                    submit
                </button>
            </div>


        </>
    )
}
export default Panel
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);

        fetch('https://62b1c2f4196a9e98703cb1fe.mockapi.io/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog),
        }).then(() => {
            setIsPending(false);
            history.push('/');

        })
    }
    return (
        <div className="create">
            <h2>Add a new Quote</h2>
            <form onSubmit={handleSubmit}>
                <label>Quote title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Quote:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >

                </textarea>
                <label>Quote author:</label>
                <input value={author} onChange={(e) => setAuthor(e.target.value)}>
                </input>
                {!isPending && <button>Add Quote</button>}
                {isPending && <button disabled >Adding Quote...</button>}

            </form>
        </div>
    )
}

export default Create
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

export default function () {

    
    const [content, setContent] = useState([]);
    const [error, setError] = useState('');
    const defaultData = {
        title: '',
        description: '',
        image: ''
    }
    const [data, setData] = useState(defaultData);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(data.title.trim() && data.description.trim() && data.image.trim()){
            setContent(curr => ([data, ...content]));
            setData(defaultData);
            setError('');
        } else {
          setError('Please fill in all fields');
        }
    }

    const remuveItem = (index) => {
        setContent(content => content.filter((_, i) => i !== index));
    }

    const changeData = (key, newValue) => {
        setData(data => ({...data, [key]: newValue}));
    }

    console.log(data);

    return (
        <>
        <h1>My blog</h1>
            <form onSubmit={handleSubmit} id="articleForm">
                <div className='form-control'>
                    <label> Title </label>
                    <input 
                        type="text"
                        value={data.title}
                        onChange={(e) => changeData('title', e.target.value)}
                    />
                </div>
                <div className='form-text-area'>
                    <label> Description </label><br />
                    <textarea
                        value={data.description}
                        onChange={(e) => changeData('description', e.target.value)}
                    />
                </div>
                <div className='form-control'>
                    <label> Url Image </label>
                    <input 
                        type="text"
                        value={data.image}
                        onChange={(e) => changeData('image', e.target.value)}
                    />
                </div>
                    <button>Submit</button>
                
            </form>
            {error && <div className="error">{error}</div>}

            {content.length > 0 && <h2 className='list'>Posts:</h2>}

            <div className="cards">
                <div className="card">
                    {content.map(({title, description, image}, index) => (
                        <div key={`content${index}`} className="card-item">
                            <img src={image} alt={title} />
                            <h3>{title}</h3>
                            <p>{description}</p>
                            <button onClick={() => remuveItem(index)}><FaRegTrashAlt /></button>
                        </div>
                    ))
                    }
                </div>
            </div>
        </>
    )

}
        
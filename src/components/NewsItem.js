import React from 'react'
const NewsItem=(props)=>{
        let {title,description,imageUrl,newsurl,author,date,source}=props;
        return (
            <div className='my-3'>
                <div className="card">
                    <div style={
                        {
                            display:'flex',
                            justifyContent:'flex-end',
                            position:'absolute',
                            right:'0'
                        }
                    }>
                        <span className='badge rounded-pill bd-danger'>{source}</span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://media.cnn.com/api/v1/images/stellar/prod/230718071039-01-gilgo-beach-investigation-071523.jpg?c=16x9&q=w_800,c_fill"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className='card-text' ><small className='text-muted'>By {author?author:"unknown"} on {new Date(date).toGMTString()}</small> </p>
                        <a href={newsurl} className="btn btn-sm btn-dark">Read More</a>
                    </div>
                </div>
            </div>
        )
}
export default NewsItem;
import React,{useEffect,useState} from 'react'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
const News=(props)=> {
  const [articles,setArticles]=useState([]);
  const [loading,setLoading]=useState(true);
  const [page,setPage]=useState(1);
  const [totalResults,settotalResults]=useState(0);
  document.title=`${props.category} - NewsMonkey`;
  News.defaultProps={
    country:'in',
    pageSize:5,
    category:'general',
  }
  News.propTypes={
    country:PropTypes.string,
    pageSize:PropTypes.number,
    category:PropTypes.string
  }
  
  useEffect(()=>{
    updateNews();
  },[]);
  const updateNews=async()=>{
    props.setProgress(0);
    const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=42653de3d6d544489886efaf60ba777e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    props.setProgress(30);
    let parseData=await data.json();
    setArticles(parseData.articles);
    settotalResults(parseData.totalResults);
    setLoading(false);
    props.setProgress(100);
  }
  const handlePreviousClick=async ()=>{
  setPage(page-1);
    updateNews();
}
  const handleNextClick=async()=>{
  setPage(page+1);
   updateNews();
}
const fetchMoreData=async()=>{
  setPage(page+1);
  const url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=42653de3d6d544489886efaf60ba777e&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data=await fetch(url);
    let parseData=await data.json();
    setArticles(articles.concat(parseData.articles));
    settotalResults(parseData.totalResults);
}
    return (
      <>
         <h1 className='text-center'>NewsApp-Top Headlines</h1>
         {/* {state.loading&&<Spinner/>}  */}
         <InfiniteScroll
         dataLength={articles.length}
         next={fetchMoreData}
         hasMore={articles.length!==totalResults}
         loader={<Spinner/>}
         >
          <div className="container">


         <div className="row">
        {
        articles.map((element)=>{
           return <div className='col-md-4' key={element.url}>
             <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
           </div>
        })
      }
       </div>
      </div>
      </InfiniteScroll>
      <div className='container d-flex justify-content-between'>
            <button disabled={page<=1} type='button' className='btn btn-dark' onClick={handlePreviousClick}>&larr; Previous</button>
            <button disabled={page+1>Math.ceil(totalResults/props.pageSize)} type='button' className='btn btn-dark' onClick={handleNextClick}>Next &rarr;</button>
        </div>
      </>
    )
  }

export default News
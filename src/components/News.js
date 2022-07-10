import React, { useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import PropTypes from 'prop-types'


const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const [apiStatus, setApiStatus] = useState(true);

    const updateNews= async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true)
        const data = await (await fetch(url)).json();
        if(data.status === 'error'){
            setApiStatus(false)
        }else{
            setApiStatus(true)
        }
        props.setProgress(50);
        setArticles(data.articles);
        setLoading(false)
        setTotalResults(data.totalResults);
        props.setProgress(100);
    }

    useEffect(() => {
        updateNews();
        document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`
        // eslint-disable-next-line
    }, []);

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        const data = await (await fetch(url)).json();
        setArticles(articles.concat(data.articles))
        setTotalResults(data.totalResults)
    };

    if(apiStatus){
        return (
        <>
            <h1 className='text-center' style={{marginTop:'5rem'}}>Top {props.category.charAt(0).toUpperCase() + props.category.slice(1)} News Headlines</h1>
            {loading && <Spinner/>}
            <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element)=>{
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem 
                                title={element.title?element.title:""} 
                                description={element.description?element.description:""} 
                                urlToImage={element.urlToImage} 
                                newsUrl={element.url}
                                author={element.author}
                                pubDate={element.publishedAt}
                                source ={element.source.name}
                                />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
        );
    }
    else{
        console.log('Daily Limit Reached')
        return (
            <div className='container text-center'>
                <h1 style={{marginTop:'6rem'}}>Error fetching Data, Daily Limit Reached</h1>
            </div>
        );
    }
}

export default News;

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

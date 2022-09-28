import notfoundimg from './image/notfoundimg.jpg';

const NotFound = () => {
    return (
        <div>
            <div className='text-center'>
                <img className="notfound" src={notfoundimg}/>
                <div className='atcenter shadow'>
                    <strong>Page you are looking for is in process of develop</strong>
                    <br/>
                    <a href='/product'className='btn btn-outline-primary shadow'>Back to Home</a>
                </div>
            </div>
            <div className='row col-md-1 rounded offset-md-1 shadow'>
                <br/><br/><br/><br/>
            </div>
            <div className='row col-md-1 rounded offset-md-3 shadow'>
                <br/><br/><br/><br/>
            </div>
            <div className='row col-md-2 rounded offset-md-5 shadow'>
                <br/><br/><br/><br/>
            </div>
            <div className='row col-md-5 rounded offset-md-1 mt-3 p-2 shadow'>
                <br/><br/><br/><br/><br/>
            </div>
            <div className='row col-md-2 rounded offset-md-9 shadow'>
                <br/><br/><br/><br/>
            </div>
            <div className='row col-md-3 rounded offset-md-3 shadow'>
                <br/><br/><br/><br/>
            </div>
            <div className='row col-md-1 rounded offset-md-6 mt-2 p-2 shadow'>
                <br/><br/><br/>
            </div>
        </div>
    );
}
 
export default NotFound;
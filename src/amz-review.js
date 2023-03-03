import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';

export default function AmzReview(){
    const [amzInputs, setamzInputs] = React.useState('');
    const [flipInputs, setflipInputs] = React.useState('');
    const [amzReviewData, setamzReviewData] = React.useState([]);
    const [flipReviewData, setflipReviewData] = React.useState([]);
    const [isShown, setIsShown] = React.useState('');
    const [isLoading, setLoading] = React.useState(true);

    function toggleAmz(){
        setIsShown('showAmz')
    }
    function toggleFlip(){
        setIsShown('showFlip')
    }
    

    const handleAmzChange = (event) => {
        setamzInputs(event.target.value)
      }
    
    const HandleAmzSubmit = () => {
        setLoading(false);
        async function getData() {
            const res = await fetch(`https://review-api-6jdz.onrender.com/get-amz-results?item=${amzInputs}`)
            const data = await res.json()
            setamzReviewData(data);
            console.log(data);
            setLoading(true);
        }
        getData()
    }

    const handleFlipChange = (event) => {
        setflipInputs(event.target.value)
      }
    
    const HandleFlipSubmit = () => {
        setLoading(false);
        async function getData() {
            const res = await fetch(`https://review-api-6jdz.onrender.com/get-flp-results?item=${flipInputs}`)
            const data = await res.json()
            setflipReviewData(data);
            console.log(data);
            setLoading(true);
        }
        getData()
    }


    return(
        <div className="review">
            <div className="buttons">
                <button className="button-49" onClick={toggleAmz}>AMAZON</button>
                <button className="button-49" onClick={toggleFlip}>FLIPKART</button>
            </div>
            {isShown === 'showAmz' ?
                <div className="amazon"> 
                    <div className="amazon-sent">
                        <input type="text" onChange={handleAmzChange} className="inputbox" placeholder='Enter amazon url' />
                            &nbsp;
                        <button onClick={HandleAmzSubmit} className="button-33">SEND</button>
                    </div>
                    {isLoading ? <div className="amz-results">
                        <br />
                        <p>{amzReviewData.data}</p>
                        <p>{amzReviewData.positive}</p>
                        <p>{amzReviewData.negative}</p>
                        <p>{amzReviewData.neutral}</p>
                    </div>: <div className="spinner"><ReactBootstrap.Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </ReactBootstrap.Spinner></div>}
                </div>
            : null}
            {isShown === 'showFlip' ?
                <div className="flipkart"> 
                    <input type="text" onChange={handleFlipChange} className="inputbox" placeholder='Enter flipkart url' />
                    &nbsp;
                    <button onClick={HandleFlipSubmit} className="button-33">SEND</button>
                    {isLoading ? <div className="flip-results">
                        <br />
                        <p>{flipReviewData.data}</p>
                        <p>{flipReviewData.positive}</p>
                        <p>{flipReviewData.negative}</p>
                        <p>{flipReviewData.neutral}</p>
                    </div>: <div className="spinner"><ReactBootstrap.Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </ReactBootstrap.Spinner></div>}
                </div>
            : null}
            
        </div>
    );
}

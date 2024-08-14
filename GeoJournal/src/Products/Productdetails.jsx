import React, { useState, Fragment } from "react";
import { useParams } from "react-router-dom";
import { lateststories } from "../homedata/homedata1";
import { todaystories } from "../homedata/homedata2";
import "../assets/Styles/productdetails.css";
import ReadMore from "./Readmore";
import { MdHeadset, MdHeadsetOff } from "react-icons/md";
import { IoPlay } from "react-icons/io5";
import { FaStopCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { incrementnew } from "../redux-slice/cartSlice";
import { toast } from "react-toastify";

const Productdetails = () => {
  const { id } = useParams();
  const allStories = [...lateststories, ...todaystories];
  const product = allStories.find((item) => item.id === parseInt(id));
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const [liked, setLiked] = useState(false); 
 const [cart,setcart]=useState(false);
  if (!product) {
    return <p>Product not found!</p>;
  }

  const speakText = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  };

  const stopSpeech = () => {
    speechSynthesis.cancel();
    setIsSpeaking(false);
  };

  const toggleSpeech = () => {
    if (isSpeaking) {
      stopSpeech();
    } else {
      speakText(product.details);
    }
    setIsSpeaking(!isSpeaking);
  };

  const dispatch = useDispatch();

  const handlecart = () => {
    dispatch(incrementnew(product));
    toast.success("Magazine placed in cart",{ theme: "colored",position:"bottom-right"});
    setcart(!cart)
  };

  const handleLike = () => {
    setLiked(!liked); 
  };

  return (
    <Fragment>
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
          <div className="download-button">
            <button>
              <a href="Geo-Journal.pdf" download="Geo-Magazine.Pdf">
                GetNow
              </a>
            </button>
          </div>
          <div
            className="audio"
            onMouseEnter={() => setShowIcons(true)}
            onMouseLeave={() => setShowIcons(false)}
          >
            {showIcons && (
              <div className="audio-icons">
                <IoPlay
                  className="audio-icon"
                  onClick={() => speakText(product.details)}
                />
                <FaStopCircle className="audio-icon" onClick={stopSpeech} />
              </div>
            )}
            <button className="audio-toggle" onClick={toggleSpeech}>
              {isSpeaking ? <MdHeadsetOff /> : <MdHeadset />}
            </button>
          </div>
        </div>

        <div className="product-detail">
          <h1>
            {product.title}
         
            <span className="credit-card-icon-container">
              <h2 onClick={handlecart} style={{color:cart ? "green":"black"}}className="material-symbols-outlined credit-card-icon">
                add_card
              </h2>
            </span>
            <span className="like-icon">
              <h2
                className="material-symbols-outlined like"
                onClick={handleLike}
                style={{ color: liked ? "red" : "black" }}
              >
                favorite
              </h2>
            </span>
          </h1>
          <h3>Director: {product.director}</h3>
          <p>
            <b>Overview:</b> {product.description}
          </p>
          <div className="read-container">
            <div className="product-read">
              <p>
                <ReadMore text={product.details} maxLength={1100} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Productdetails;

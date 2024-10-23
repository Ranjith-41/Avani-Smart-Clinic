import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css';

// Function to render star emojis based on the rating value
const renderStars = (rating) => {
  return '⭐'.repeat(rating);
};

const ReviewsCarousel = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/feedback'); // Your backend endpoint
        setFeedbacks(response.data);
      } catch (error) {
        console.log('Error fetching feedback:', error);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    
    <Carousel>
      {feedbacks.map((feedback, index) => (
        <Carousel.Item key={index}>
          <div className="carousel-card" md={12} xs={12}>
            <h3 id="fname">{feedback.name}</h3>
            <p>{feedback.message}</p>
            <p>{renderStars(feedback.rating)}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ReviewsCarousel;

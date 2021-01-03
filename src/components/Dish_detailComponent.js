import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = ({dish}) => {
    if (dish != null){
        const dish_comments = dish.comments.map((com) => {
            return(
                <div key={com.id} className="mb-3">
                        <p><CardText className="mb-2">{com.comment}</CardText>
                        <CardText>--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</CardText></p>
                </div>
            );
        });
        return(
            <div className= "container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        
                        <CardTitle>Comments</CardTitle>
                        {dish_comments}
                        
                    </div>
                </div>
            </div>
        );
    }
    
else
    return(
        <div></div>
    );
}

export default DishDetail;
import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const DishDetail = ({dish}) => {
    if (dish != null){
        const dish_comments = dish.comments.map((com) => {
            return(
                <div key={com.id} className="mb-3">
                        <CardText className="mb-1">{com.comment}</CardText>
                        <CardText>--{com.author},{com.date}</CardText>
                </div>
            );
        });
        return(
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
                <div className="col-12 col-md-6 m-1">
                    <Card>
                        <CardTitle>Comments</CardTitle>
                        {dish_comments}
                    </Card>
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
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
const DishDetail = (props) => {
    if (props.dish != null){
        const dish_comments = props.comments.map((com) => {
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
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>                
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg top src={`/React${props.dish.image}`} alt={props.dish.name} />
                            <CardBody>
                                <CardTitle>{props.dish.name}</CardTitle>
                                <CardText>{props.dish.description}</CardText>
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
    
else{
    return(
        <div></div>
    );
}
}

export default DishDetail;
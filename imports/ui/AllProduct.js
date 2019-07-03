import React,{Component} from 'react'

class AllProduct extends Component{
    render(){
        return(
            <div className="container">
                <div className="bread-crumb">
                    <ul >
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Pictures</a></li>
                        <li><a href="#">Summer 15</a></li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-2">
                        <span className = "cate-filter-text">Category</span>
                    </div>
                    <div className="col-2">
                        <div className="drop-down">
                            <button>Popularity<img src="./arrow-black/arrow-black.png"/></button>
                            <div className="drop-content">
                                <a href="#">Popularity</a>
                                <a href="#">Name: A - Z</a>
                                <a href="#">Lowest to highest</a>
                                <a href="#">Highest to lowest</a>
                            
                            </div>
                        </div>
                    </div>
                    <div className="col-8 text-right">
                        <div className="paginationn">
                            <button><img src="./arrow-black/arrow-black.png"/></button>
                            <span>1/100</span>
                            <button><img src="./arrow-black/arrow-black.png"/></button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-2">
                        <div className="category">
                            <ul>
                                <li><a href="#">All dresses</a></li>
                                <li><a href="#">Rompers / Jumpsuits</a></li>
                                <li><a href="#">Casual dresses</a></li>
                                <li><a href="#">Going out dresses</a></li>
                                <li><a href="#">Party / Ocassion dresses</a></li>
                                <li><a href="#">Mini dresses</a></li>
                                <li><a href="#">Maxi / Midi dresses</a></li>
                                <li><a href="#">Sets</a></li>
                            </ul>
                        </div>
                        <hr/>
                        <div className="filter">
                            <span className = "cate-filter-text">Filter</span>
                            <div className="accordion-list">
                                <ul >
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header">
                                                <span href="#">Size</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            <div className="accordion-item-content">
                                                <div className="size-box-selected"><span>S</span></div>
                                                <div className="size-box"><span>M</span></div>
                                                <div className="size-box"><span>L</span></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header">
                                                <span href="#">Color</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            <div className="accordion-item-content">
                                                <div className="color-box-selected"></div>
                                                <div className="color-box"></div>
                                                <div className="color-box"></div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header">
                                                <span href="#">Brand</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            <div className="accordion-item-content">
                                                <div className="brand-list">
                                                    <ul>
                                                        <li><span>Zara</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                                                        <li><span>Zara</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                                                        <li><span>Zara</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                                                        <li><span>Zara</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                                                        <li><span>Zara</span><img src="./checkbox-orange/checkbox-orange.png"/></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="accordion-item">
                                            <div className="accordion-item-header">
                                                <span href="#">Price</span>
                                                <img src="./arrow-black/arrow-black.png"/>
                                            </div>

                                            <div className="accordion-item-content">
                                                <div className="">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>

                        </div>
                    </div>

                    <div className="col-10">
                        <div className="row">
                            <div className="col">col1</div>
                            <div className="col">col2</div>
                            <div className="col">safd</div>
                            <div className="col">asf</div>
                            <div className="col">asdf</div>
                        </div>
                    </div>
                    

                </div>



            </div>
        )
    }

}

export default AllProduct 
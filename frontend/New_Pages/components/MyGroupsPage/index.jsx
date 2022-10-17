import React, {useEffect, useState}from "react";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import "./MyGroupsPage.css";
import Cookie from 'universal-cookie';
import {Link} from "react-router-dom";

/* icon imports */
import {AiOutlineHome} from 'react-icons/ai';
import {HiOutlineShoppingBag} from 'react-icons/hi';
import {MdOutlineGroups} from 'react-icons/md';
import {AiOutlineUsergroupAdd} from 'react-icons/ai';
import {TbStar} from 'react-icons/tb';
import {AiOutlineLock} from 'react-icons/ai';
import {RiBookOpenLine} from 'react-icons/ri';
import SideNav from "../SideNavComponent";
import SellSideNav from "../SideNavComponent";

const GroupPage = () => {

  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get("/public").then((response) => {
      setPost(response.data);
    });
  }, []);

  {/*get user id axios.get(BASE_URL + '/todos', { withCredentials: true });*/}
  var coookie = new Cookie();
  const [user, setUser] = useState([]);
  const fetchData = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    console.log(server_res);
    //const user = server_res.data.user_email;
    const user = server_res.data;
    setUser(user);
    //console.log(server_res.data.user_id);
  
  };

        
  // log OUT HERE
  const handleLogOut = async () => {
    await axios.put("/logout", {} ,{withCredentials:true, headers:{'Authorization':coookie.get("token")}})
    .then(response => {
      if (response.status === 200) {
        location.pathname='/login-page';
      }
    })
    .catch(error => {
      console.log("Error signing out", error);
    });
  };
        


  {/*method to unpack the data and fetch effect*/ }
  useEffect(() => {
    fetchData();
  }, []);

  console.log(user.first);

  return (
<div className="parent" >
     {/* top nav bar*/}
     <div class="navbar">
    <h1 className="website-title"> Market34</h1>
        <a href="/home-page"> <AiOutlineHome className="icon"/> Home</a>
        <Link to={`/sell-page/${user.user_id}`}> Sell </Link>
        <a href="/group-page"> <AiOutlineUsergroupAdd className="icon"/> Groups</a>
        <a class="active" href="/my-groups-page"> <MdOutlineGroups className="icon"/> My Groups</a>
        <a href="/wishlist-page"> <TbStar className="icon"/> Wishlist</a>
      <div class="nav-login">
      {/* search bar*/}
      <a href="#"> <button onClick={() => handleLogOut()}> <AiOutlineLock className="icon"/> Log Out </button></a>
      <a href="#"><RiBookOpenLine className="icon" /> Welcome: {user.first}</a>
      <a href="/checkout-page"> Cart</a>
      
      <input type="text"placeholder="Search.."> 
      </input>
      </div>
    </div>

    {/* side bar*/} 
    <div class="new">
      <a href="/create-group-page" >
        <button class="btn btn-success"> Create New Group</button>
      </a>
    </div>
  
    {/* products display*/} 
    <div class="main">
      <div className="home-title"> My Groups:</div>
      <hr />
      <div className="number-listings"> 1234, 5678 groups 
      
          {/* sort by button drop down*/} 
    <div className="move-drop-btn">
      <div class="dropdown">
                <button class="dropbtn">Sort by: Default</button>
                <div class="dropdown-content">
                    <a href="#">Members: High-Low</a>
                    <a href="#">Members: Low-High</a>       
                </div>
        </div>
      </div> 
      </div> 
      <hr />
    <div className="products-wrapper">  
    {/* products display 1st row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        {/* spacer instead of wishlist btn*/}
        &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
        {/* spacer instead of wishlist btn*/}
        &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      
    </div>
    </div>

    {/* products display 2nd row*/} 
    <div className="wrapper" >
    <div class="row2">
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
      <div class="column">
      <div class="card">
        <div className="img-wrap"> <img src={logo} className="logo-position"></img> </div>
         {/* spacer instead of wishlist btn*/}
         &nbsp;
        <div className="item-cart">
        <h5>Marketplace Sellers</h5>
        <p class="members-text">31k Members</p>
        <p><button>Leave Group</button></p>
        </div>
      </div>
      </div>
    </div>
   
    </div>
    </div>
    {/* next page bar here*/}
    <div class="center-next">
      <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a>
      <a href="#">6</a>
      <a href="#">&raquo;</a>
    </div>
  </div>
    </div> 


  </div>
  );
}

export default GroupPage;

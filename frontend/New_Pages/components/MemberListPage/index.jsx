import React, {useEffect, useState}from "react";
import "./MemberListPage.css";
import logo from "../../dist/img/t34-logo.jpg";
import axios from "../../api/axios";
import MemberList from "../MemberListComponent";
import { useParams } from "react-router-dom";
import Cookie from 'universal-cookie';
import PageNext from "../PageNextBar/PageNext";
import {Link} from "react-router-dom";
import NavBar from "../NavBarComponent";

const MemberListPage = () => {
  const {groupId} = useParams()

  {/*fetch item data*/}
  const [group, setGroup] = useState({});
  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [firstRender, setFirstRender] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  // 10 items displayed per page
  const [recordsPerPage] = useState(10);

  var coookie = new Cookie();

  const fetchGroup = async () => {
    const server_res = await axios.get("/getuser", {withCredentials:true, headers:{'Authorization':coookie.get("token")}});
    const user = server_res.data.user_id;

    await axios.get(`/groups/group/${groupId}`)
    .then(res => {
      setGroup(res.data);

      if (res.data.admins && res.data.admins.includes(user)) {
        setIsAdmin(true);
        console.log(isAdmin);
      }
    })
  };

  const queryParams = new URLSearchParams(window.location.search);
  const searchBy = queryParams.get("searchBy");

  const fetchMembers = async () => {
    await axios.get('/groups/members/'+groupId)
    .then(res => {
      //search filter logic
      var tmp = res.data.members;

      if (queryParams.has("searchBy")) {
        const searchedData = [];
        const query_characters = searchBy.toLowerCase().split("");
        tmp.forEach(entry => {
          //console.log(entry.name.toLowerCase().split(""))
          var i = 0, count = 0;
          var name = entry.first_name + " " + entry.last_name;
          name.toLowerCase().split("").forEach(character => {
            if (query_characters[i] == character) {
              count++;
            }
            i++;
          });
          if (count == query_characters.length) {
            console.log(entry.name);
            searchedData.push(entry);
          }
        });
        tmp = searchedData;
        //console.log(tmp);
      }
      setMembers(tmp);
      setAdmins(res.data.admins);
      setFirstRender(true);
    })
  };

  useEffect(() => {
    fetchMembers();
    fetchGroup();
    //checkAdminship();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = members.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(members.length / recordsPerPage);

return (
    <div className="parent" >
     {/* top nav bar*/}
    <NavBar />
    <div class="listings-main">

             {/*Group img   <div className="img-wrap-mem"> <img src={logo} className="popup-img"></img> </div> */} 
    <div class="left-box-mem">
        <div className="square-pic-mem">  
        <img src={group.icon_url} className="popup-img"></img>
        </div> 
    </div>
      <div className="shift-title"> <div className="home-title"> Members of <b> "{group.name}"</b></div> </div>
          
    </div>
    <hr />
    {members.length} members
    <br/>
    <hr />

    {/* member list of the group*/}
    
    <MemberList data={members} isAdmin={isAdmin}/>
    </div>
  );
}

export default MemberListPage;
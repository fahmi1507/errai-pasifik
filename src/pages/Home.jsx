import React from "react";
import { useSelector } from "react-redux";
import PersonLists from "../components/PersonLists";
import Table from "../components/Table";
import "./home.css";

const Home = () => {
  const links = useSelector((state) => state.links);

  return (
    // <div className="container-fluid home">
    //   <div className="row page pt-2">
    //     <div className="col-md-2 person__div">
    //       <div className="person glass p-2">
    //         <div>
    //           <h5>Person Lists</h5>
    //         </div>
    //         <div>
    //           <PersonLists></PersonLists>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col-md-10">
    //       <div className="row d-flex flex-column row__search">
    //         <div className="col ps-0 mb-1">
    //           <div className="p-2 glass search_result">
    //             <div>
    //               <h5>Search Results</h5>
    //             </div>
    //             <Table />
    //           </div>
    //         </div>
    //         <div className="col ps-0 mt-1">
    //           <div className="p-2  glass content">
    //             <div>
    //               <h5>Content</h5>
    //             </div>
    //             <iframe width="100%" height="300" title="content" src={links}></iframe>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="container home ">
      <div className="person glass p-2">
        <div>
          <h5>Person Lists</h5>
        </div>
        <div className="person__List">
          <PersonLists></PersonLists>
        </div>
      </div>
      <div className="d-flex flex-column align-items-end search__content">
        <div className="my-2 items">
          <div className="p-2 glass search_result">
            <div>
              <h5>Search Results</h5>
            </div>
            <Table />
          </div>
        </div>
        <div className="mt-1 items">
          <div className="p-2  glass content">
            <div>
              <h5>Content</h5>
            </div>
            <iframe width="100%" height="400" title="content" src={links}></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

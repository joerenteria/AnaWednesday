import { useEffect, useState } from "react";


function Account({user}) {
  const [pages, setPages] = useState([]);
  const [page, setPage] = useState({});

  const [title1, setTitle1] = useState("");
  const [image1, setImage1] = useState("");
  const [comment1, setComment1] = useState("");

  const [title2, setTitle2] = useState("");
  const [image2, setImage2] = useState("");
  const [comment2, setComment2] = useState("");

  const [title3, setTitle3] = useState("");
  const [image3, setImage3] = useState("");
  const [comment3, setComment3] = useState("");
  
  
  useEffect(() => {
    fetch("/pages")
      .then((r) => r.json())
      .then(setPages);
  }, []);

  function loadPage(id) {
    fetch(`/pages/${id}`)
    .then((r) => r.json())
    // .then(    (fetched_page) => { setPage(fetched_page) }     )
    .then( (fetched_page) => { 
      
        setPage(fetched_page) // visual

        setTitle1(fetched_page.title1) // title : for the form
        setImage1(fetched_page.image1)
        setComment1(fetched_page.comment1) // comment :for the form

        setTitle2(fetched_page.title2) // title : for the form
        setImage2(fetched_page.image2)
        setComment2(fetched_page.comment2) // comment :for the form

        setTitle3(fetched_page.title3) // title : for the form
        setImage3(fetched_page.image3)
        setComment3(fetched_page.comment3) // comment :for the form
    
    })
    .then(console.log(page))

    // .then(setPage)
    // .then(setPage, setComment)
    // .then()   ->     f()
    // .then()   ->     f( ff )   ->   f()  >   ff("hi")
    // .then()   ->     f( ff() ) X
    ////  fuction f(){  return "hi" }
    ////  function ff(whatDidTheySay){ return whatDidTheySay }
    // .then(console.log(page))
  }

  function handleDelete(id , directory) {
    fetch(`/pages/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        directory, title1, image1, comment1, title2, image2, comment2, title3, image3, comment3
      })
    })
  }

  function refreshFront(id){
    const newPageArray = pages.filter(item => item.id !== id);
    setPages([...newPageArray])
    setPage({})
  }

  function handleUpdate(id , directory) {

    fetch(`/pages/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        directory, title1, image1, comment1, title2, image2, comment2, title3, image3, comment3
      })
    })
  }

  return (<div className="page1">
<div>my pages</div>
    <div className="box1">
    
      {
        pages.map((page) => (
                <button key={page.id} className="link1" onClick={() => loadPage(page.id)}>{page.title1}</button>
                ))
      }
     </div>

     <div>
      {
            <div>
              <a target="_blank" href={page.directory}>{page.directory}</a>
<form className="form1">
              

            <label htmlFor="title1">title</label>
            <input
              type="text"
              id="title1"
              value={title1}
              onChange={(e) => setTitle1(e.target.value)}
            />
            <label htmlFor="image1">image</label>
            <input
              type="text"
              id="image1"
              value={image1}
              onChange={(e) => setImage1(e.target.value)}
            />
            <img className="imageform" src={image1}/>
            <label htmlFor="comment1">text</label>
            <textarea
              id="comment1"
              rows="10"
              value={comment1}
              onChange={(e) => setComment1(e.target.value)}
            />





            <label htmlFor="title2">title</label>
            <input
              type="text"
              id="title2"
              value={title2}
              onChange={(e) => setTitle2(e.target.value)}
            />
            <label htmlFor="image2">image</label>
            <input
              type="text"
              id="image2"
              value={image2}
              onChange={(e) => setImage2(e.target.value)}
            />
            <img className="imageform" src={image2}/>
            <label htmlFor="comment2">text</label>
            <textarea
              id="comment2"
              rows="10"
              value={comment2}
              onChange={(e) => setComment2(e.target.value)}
            />





            <label htmlFor="title3">title</label>
            <input
              type="text"
              id="title3"
              value={title3}
              onChange={(e) => setTitle3(e.target.value)}
            />
            <label htmlFor="image3">image</label>
            <input
              type="text"
              id="image3"
              value={image3}
              onChange={(e) => setImage3(e.target.value)}
            />
            <img className="imageform" src={image3}/>
            <label htmlFor="comment3">text</label>
            <textarea
              id="comment3"
              rows="10"
              value={comment3}
              onChange={(e) => setComment3(e.target.value)}
            />






                <button className="link1" onClick={() => {
                  handleDelete(page.id , page.directory);
                  refreshFront(page.id);
                }}>Delete</button>

                <button className="link1" onClick={() => handleUpdate(page.id , page.directory)}>Save</button>
           
                </form>
                </div>
        }
        </div>

        </div>

  );
}

export default Account;

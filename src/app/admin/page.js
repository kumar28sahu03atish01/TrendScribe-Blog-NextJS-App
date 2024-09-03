"use client";
// src/app/admin/page.js
import "draft-js/dist/Draft.css";
import style from "./page.module.css";
import { AddUser, FetchUsers, DeleteUser, UpdateUser } from "@/actions";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import { formFields } from "@/images/data";

export default function Page() {
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({ blogid: "", blogname: "", blogdescription: "", blogauthorname: "", blogcategory: "", blogauthorimage: "", blogimage: "", blogdate: "", bloghashtag: "", });
  const [editMode, setEditMode] = useState(false);
  const [editUserId, setEditUserId] = useState(null);

  const fetchUsers = async () => {
    const result = await FetchUsers();
    if (result.success) {
      setUsers(result.data);
    } else {
      console.log(result.message);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  const formatDate = (date) => {
    if (!date) return "";
    const d = new Date(date);
    if (isNaN(d.getTime())) return "";
    return d.toISOString().split("T")[0];
  };

  const HandleSubmit = async (e) => {
    e.preventDefault();
    if (editMode) {
      const result = await UpdateUser(editUserId, data);
      console.log(result);
      setEditMode(false); setEditUserId(null);
    } else {
      const result = await AddUser(data);
      console.log(result);
    }
    setData({ blogid: "", blogname: "", blogdescription: "", blogauthorname: "", blogcategory: "", blogauthorimage: "", blogimage: "", blogdate: "", bloghashtag: "", });
    fetchUsers();
  };

  const HandleDelete = async (id) => {
    const result = await DeleteUser(id);
    console.log(result);
    if (result.success) {
      fetchUsers();
    }
  };

  const HandleUpdateClick = async (user) => {
    setEditMode(true);
    setEditUserId(user._id);
    setData({ blogid: user.blogid, blogname: user.blogname, blogdescription: user.blogdescription, blogauthorname: user.blogauthorname, blogcategory: user.blogcategory, blogauthorimage: user.blogauthorimage, blogimage: user.blogimage, blogdate: formatDate(user.blogdate), bloghashtag: user.bloghashtag, });
  };
  return (
    <>
      <div className={style.ADMIN_DIV_HD1}><h1 className={style.ADMIN_DIV_HD1_h1}>TrendScribe Admin Panel</h1></div>

      <div className={style.ADMIN_DIV_FORM}>
        <form className={style.ADMIN_DIV_FORM_FRM} onSubmit={HandleSubmit}>
          {formFields.map((field) => ( 
            <div key={field.id} className={style.ADMIN_DIV_FORM_FRM_DIV}>
              <label className={style.ADMIN_DIV_FORM_FRM_DIV_LBL} htmlFor={field.id}>{field.label}</label>
                {
                  field.type === 'textarea' ? 
                  ( <textarea className={style.ADMIN_DIV_FORM_FRM_DIV_TXT} id={field.id} name={field.id} rows={field.rows} placeholder={field.placeholder} value={data[field.id]} onChange={(e) => setData({ ...data, [field.id]: e.target.value })} required={field.required} />)
                  : field.type === 'select' ? 
                  ( <select className={style.ADMIN_DIV_FORM_FRM_DIV_IP} id={field.id} name={field.id} value={data[field.id]} onChange={(e) => setData({ ...data, [field.id]: e.target.value })} required={field.required} >
                      <option value="" hidden>Select An Option</option>
                      {
                        field.options.map((option) => ( <option key={option} value={option}>{option}</option> ))
                      }
                    </select>) : 
                  (<input className={style.ADMIN_DIV_FORM_FRM_DIV_IP} id={field.id} name={field.id} type={field.type} placeholder={field.placeholder} value={data[field.id]} onChange={(e) => setData({ ...data, [field.id]: e.target.value })} required={field.required} />)
                }
            </div>
          ))}
          <div className={style.ADMIN_DIV_FORM_FRM_DIV_C}>
            <input className={style.ADMIN_DIV_FORM_FRM_DIV_BTN} type="submit" value={editMode ? "Update Blog" : "Submit Blog"} />
          </div>
        </form>
      </div>

      <div className={style.ADMIN_DIV_IMG_UPL}>
        <p className={style.ADMIN_DIV_IMG_UPL_P}>If you're an admin looking to create a secure and user-friendly URL link for your images, you can choose from the websites listed below. These platforms are reliable for generating image URLs efficiently. Alternatively, if you prefer not to use these options, you can explore other websites that offer similar services. </p>
        <a className={style.ADMIN_DIV_IMG_UPL_LNK} href="https://freeimage.host/" target="_blank">FreeImage</a>
        <a className={style.ADMIN_DIV_IMG_UPL_LNK} href="https://postimages.org/" target="_blank">PostImages</a>
      </div>

      <div className={style.DIV_LISTS_TABLE}>
        {users.map((list) => (
          <div key={list._id} className={style.DIV_LISTS_TABLE_LST}>
            <p>{list.blogid}</p>
            <p>{list.blogauthorname}</p>
            <p>{list.blogname.split(/[:?.!]/)[0]}</p>
            <p>{list.blogcategory}</p>
            <p>{formatDate(list.blogdate)}</p>
            <button className={style.DIV_LISTS_TABLE_LST_BTN} onClick={() => HandleDelete(list._id)}><ImCross size={15} color="white" /></button>
            <button className={style.DIV_LISTS_TABLE_LST_BTN} onClick={() => HandleUpdateClick(list)}><FaPen size={15} color="white" /></button>
          </div>
        ))}
      </div>
    </>
  );
}

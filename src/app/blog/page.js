'use client';
import { FetchUsers } from "@/actions";
// src/app/blog/page.js;
import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import style from './page.module.css';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};


export default function page () {
    const [users, setUsers] = useState([]);
    const [filteredBlogList, setFilteredBlogList] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');
    const router = useRouter();

    const fetchUsers = async () => {
        const result = await FetchUsers();
        if (result.success) {
            const blogs = result.data || [];
            const sanitizedBlogs = blogs.map(blog => ({
                ...blog,
                category: blog.category ? blog.category.trim().toLowerCase() : ''
            }));

            const shuffledBlogs = shuffleArray(sanitizedBlogs);
            setFilteredBlogList(shuffledBlogs);            
            setUsers(shuffledBlogs);
        } else {
          console.log(result.message);
        }
    };
    
    useEffect(() => { fetchUsers(); }, []);

    useEffect(() => {
        if (selectedCategory) {
            const normalizedSelectedCategory = selectedCategory.toLowerCase().trim();

            const filtered = normalizedSelectedCategory === 'all'
                ? shuffleArray([...users])
                : shuffleArray([...users.filter(blog => {
                    const normalizedBlogCategory = blog.blogcategory.toLowerCase().trim();
                    return normalizedBlogCategory === normalizedSelectedCategory;
                })]);

            setFilteredBlogList(filtered);
        } else {
            setFilteredBlogList(shuffleArray([...users]));
        }
    }, [selectedCategory, users]);

    const handleReadMore = (id) => {
        router.replace(`/blog/${id}`);
    };

    return (
        <>
            <Header onCategorySelect={setSelectedCategory} />
            <div className={style.BLOG_POST_LISTS}>
                {
                    filteredBlogList.map((list)=>(
                        <div key={list._id} className={style.BLOG_POST_LISTS_DIV}>
                            <div className={style.BLOG_POST_LISTS_DIV_POST}>
                                <img className={style.BLOG_LISTS_BLOG_POST_IMG} src={list.blogimage} alt={list.blogname} width="200px" height="200px" />
                                <h3 className={style.BLOG_LISTS_BLOG_POST_PPP}>{list.blogname.split(/[:?.!]/)[0]}</h3>
                                <button className={style.BLOG_LISTS_BLOG_POST_BTN} onClick={() => handleReadMore(list._id)}>Read More!</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Footer />
        </>
    );
}
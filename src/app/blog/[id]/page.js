'use client';

// src/app/blog/[id]/page.js
import { GetIdBlog } from '@/actions';
import Footer from '@/components/footer/Footer';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Heading1 } from '@/images/data';
import style from './page.module.css';

export default function Page() {
    const { id } = useParams();
    const [blog, setBlog] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const GetBlog = async () => {
        try {
            const result = await GetIdBlog(id);
            if (result.success) {
                setBlog(result.data);
            } else {
                setError(result.message);
            }
        } catch (error) {
            setError("An error occurred while fetching the blog.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { GetBlog(); }, [id]);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>{error}</div>;

    const formatDate = (date) => {
        if (!date) return "";
        const d = new Date(date);
        if (isNaN(d.getTime())) return "";
        return d.toISOString().split("T")[0];
    };

    const markdownComponents = {
        p: ({ node, ...props }) => <p className={style.customP} {...props} />,
        h1: ({ node, ...props }) => <h1 className={style.customH1} {...props} />,
        h2: ({ node, ...props }) => <h2 className={style.customH2} {...props} />,
        h3: ({ node, ...props }) => <h3 className={style.customH3} {...props} />,
        li: ({ node, ...props }) => <li className={style.customLI} {...props} />,
    };

    return (
        <>
            <div className={style.BLOG_POST_H1_DIV}><h1 className={style.BLOG_POST_H1_DIV_H1}>{Heading1}</h1></div>

            <div className={style.BLOG_POST_BOX_DIV}>
                <div className={style.BLOG_POST_BOX_DIV_IMG_D}>
                    <img className={style.BLOG_POST_BOX_DIV_IMG_D_IMG} src={blog.blogimage} alt={blog.blogname} width="600px" height="400px" />
                </div>

                <div className={style.BLOG_POST_BOX_DIV_H1_H4_D}>
                    <h1 className={style.BLOG_POST_BOX_DIV_H1_H4_D_H1}>{blog.blogname}</h1>
                    <h4 className={style.BLOG_POST_BOX_DIV_H1_H4_D_H4}>{blog.bloghashtag}</h4>
                </div>

                <div className={style.BLOG_POST_BOX_DIV_IMG_NM_D}>
                    <img className={style.BLOG_POST_BOX_DIV_IMG_I} src={blog.blogauthorimage} alt={blog.blogauthorimage} width="200px" height="200px" />
                    <p className={style.BLOG_POST_BOX_DIV_NM_N}>{blog.blogauthorname}</p>
                    <p className={style.BLOG_POST_BOX_DIV_NM_DT}>{formatDate(blog.blogdate)}</p>                   
                </div>

                <ReactMarkdown components={markdownComponents}>
                    {blog.blogdescription}
                </ReactMarkdown>
            </div>

            <div className={style.BACK_BTN_DIV}><Link className={style.BACK_BTN_LNK} href="/blog">Back</Link></div>

            <Footer />
        </>
    );
}

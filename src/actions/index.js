'use server';
// src/actions/index.js
import { connectToDB } from "@/database";
import { BlogPosts } from "@/models";

export async function AddUser(formData) {
    await connectToDB();
    try {
       const { blogid, blogname, blogdescription, blogauthorname, blogcategory, blogauthorimage, blogimage, blogdate, bloghashtag } = formData;

        const newUser = new BlogPosts({ blogid, blogname, blogdescription, blogauthorname, blogcategory, blogauthorimage, blogimage, blogdate, bloghashtag});
        const save = await newUser.save();

        if(save){
            return{
                success: true,
                data: JSON.parse(JSON.stringify(save))
            }
        } else {
            return {
                success: false,
                message: "Invalid Credential. Try Again!",
            }
        }
    } catch (error) {
        console.log(error);
        return{
            message: "Something Error Occured",
            success: false,
        }
    }
}

export async function FetchUsers() {
    await connectToDB();
    try {
        const users = await BlogPosts.find({});
        return {
            success: true,
            data: JSON.parse(JSON.stringify(users))
        };
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Failed to fetch users."
        };
    }
}

export async function GetIdBlog(id) {
    await connectToDB();
    try {
        const blog = await BlogPosts.findById(id);
        if (blog) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(blog))
            };
        } else {
            return {
                success: false,
                message: "Blog not found."
            };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Failed to fetch blog."
        };
    }
}

export async function DeleteUser (userId) {
    await connectToDB();
    try {
        const deletedUser = await BlogPosts.findByIdAndDelete(userId);
        if (deletedUser) {
            return {
                success: true,
                message: "User deleted successfully",
            };
        } else {
            return {
                success: false,
                message: "User not found",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Failed to delete user",
        };
    }
}

export async function UpdateUser(userId, updatedData) {
    await connectToDB();
    try {
        const updatedUser = await BlogPosts.findByIdAndUpdate(userId, updatedData, { new: true });
        if (updatedUser) {
            return {
                success: true,
                data: JSON.parse(JSON.stringify(updatedUser)),
                message: "User updated successfully",
            };
        } else {
            return {
                success: false,
                message: "User not found",
            };
        }
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Failed to update user",
        };
    }
}
// src/images/data.js

export const Heading1 = `TrendScribe Blog`;
export const About = `TrendScribe Blog App is your go-to platform for discovering and sharing insightful content across a wide range of topics. Whether you're a food enthusiast, a travel aficionado, or someone passionate about health and wellness, TrendScribe offers a diverse collection of blogs tailored to your interests. Dive into captivating stories about life's journeys, explore the latest trends in technology, or get inspired by personal experiences from people around the world. With TrendScribe, you can stay informed, entertained, and connected to a community that shares your curiosity and passion for exploring the world around us.`

export const ImageArray = [
    {
        id: "1",
        altname: "Food Image",
        name: "Food",
        image_link_1: "https://i.postimg.cc/76X15knb/Food.jpg",
        image_link_2: "https://iili.io/dO8JtZ7.jpg",
        about: `Indulge in the world of culinary delights with our Food section, where every recipe tells a story and every dish is an adventure. From mouth-watering street food to gourmet delicacies, explore diverse cuisines, discover cooking tips, and savor the flavors that connect cultures. Whether you're a seasoned chef or a home cook, this section offers something for everyone who loves to cook, eat, and celebrate food.`
    },
    {
        id: "2",
        altname: "Game Image",
        name: "Game",
        image_link_1: "https://i.postimg.cc/T27qGTP4/Game.jpg",
        image_link_2: "https://iili.io/dO8Jp6u.jpg",
        about: `Explore the dynamic world of gaming in our Games section, where we dive into the latest releases, gaming trends, and diverse genres. From action-packed shooters and immersive RPGs to strategic simulations and indie gems, discover in-depth reviews, gameplay tips, and industry insights. Whether you're a casual gamer or a dedicated enthusiast, find everything you need to stay engaged and informed about the ever-evolving landscape of video games.`
    },
    {
        id: "3",
        altname: "Life Image",
        name: "Life",
        image_link_1: "https://i.postimg.cc/Vv6qMVKg/Life.jpg",
        image_link_2: "https://iili.io/dO8JZjS.jpg",
        about: `Navigate the complexities and joys of living with our Life section, dedicated to personal growth, relationships, and everyday wisdom. Whether you're seeking advice on work-life balance, exploring mindfulness practices, or looking for inspiration in the stories of others, this section offers a space for reflection and growth. Embrace the art of living well, and find meaning in the moments that shape your life.`
    },
    {
        id: "4",
        altname: "Health Image",
        name: "Health",
        image_link_1: "https://i.postimg.cc/Gh4Pm68h/Health.jpg",
        image_link_2: "https://iili.io/dO8d93b.jpg",
        about: `Prioritize your well-being with insights from our Health section, where we explore the latest trends and timeless advice on maintaining a balanced life. From fitness routines and nutritious recipes to mental health tips and holistic practices, this section empowers you to take control of your health journey. Stay informed and motivated to lead a healthier, happier life with expert guidance and practical advice.`
    },
    {
        id: "5",
        altname: "Technology Image",
        name: "Technology",
        image_link_1: "https://i.postimg.cc/vTcnD6mS/Tech.jpg",
        image_link_2: "https://iili.io/dO8doFa.jpg",
        about: `Stay ahead of the curve with the latest innovations and trends in our Tech section, where the future of technology is explored and explained. Whether you're interested in cutting-edge gadgets, software developments, or the impact of tech on society, this section provides in-depth analysis and insights. From beginners to tech enthusiasts, everyone can find something to fuel their curiosity and expand their knowledge in the ever-evolving world of technology.`
    },
    {
        id: "6",
        altname: "Person Image",
        name: "Person",
        image_link_1: "https://i.postimg.cc/nLJqTzdC/Person.jpg",
        image_link_2: "https://iili.io/dO8dC6g.jpg",
        about: `Discover the stories and experiences that define us in the Person section, where individual journeys and diverse perspectives come to life. From profiles of inspiring figures to personal essays and interviews, this section celebrates the unique voices that contribute to our shared human experience. Dive into narratives that resonate with authenticity, and connect with the lives of others in meaningful ways.`
    },
    {
        id: "7",
        altname: "Travel Image",
        name: "Travel",
        image_link_1: "https://i.postimg.cc/2yMZW8bj/Travel.jpg",
        image_link_2: "https://iili.io/dO8dz8v.jpg",
        about: `Embark on a journey through our Travel section, where the thrill of exploration meets the joy of discovery. From hidden gems in bustling cities to tranquil escapes in nature, this section takes you on a global tour, offering tips, guides, and inspiration for your next adventure. Whether you're a seasoned traveler or planning your first trip, explore the wonders of the world and create memories that last a lifetime.`
    },
    {
        id: "8",
        altname: "Films Image",
        name: "Films",
        image_link_1: "https://i.postimg.cc/tC889Ytr/Films.jpg",
        image_link_2: "https://iili.io/dOSNqrv.jpg",
        about: `Immerse yourself in the cinematic universe with our Films section, offering comprehensive coverage of the latest releases, timeless classics, and diverse genres. From thrilling blockbusters and thought-provoking dramas to indie films and international cinema, explore detailed reviews, director insights, and industry news. Whether you're a film buff or simply looking for your next movie night pick, this section has something for everyone passionate about the art of filmmaking.`
    },   
]

export const formFields = [
    {
      id: 'blogid',
      label: 'Blog Id',
      type: 'text',
      placeholder: 'Enter Blog Id Value',
      required: true,
    },
    {
      id: 'bloghashtag',
      label: 'Blog HashTags',
      type: 'text',
      placeholder: 'Add #HashTags',
      required: true,
    },
    {
      id: 'blogname',
      label: 'Blog Name',
      type: 'text',
      placeholder: 'Enter Blog Title',
      required: true,
    },
    {
      id: 'blogimage',
      label: 'Blog Image URL',
      type: 'text',
      placeholder: 'Enter Blog Image URL Link',
      required: true,
    },
    {
      id: 'blogauthorname',
      label: 'Blog Author Name',
      type: 'text',
      placeholder: 'Enter Blog Author Name',
      required: true,
    },
    {
      id: 'blogauthorimage',
      label: 'Author Image URL',
      type: 'text',
      placeholder: 'Enter Author Image URL Link',
      required: true,
    },
    {
      id: 'blogdate',
      label: 'Blog Date',
      type: 'date',
      required: true,
    },
    {
      id: 'blogcategory',
      label: 'Blog Category',
      type: 'select',
      required: true,
      options: ['Technology', 'Games', 'Travel', 'Films', 'Person', 'Life', 'Health', 'Food'],
    },
    {
      id: 'blogdescription',
      label: 'Blog Description',
      type: 'textarea',
      rows: 10,
      placeholder: 'Write your blog content here...',
      required: true,
    },
  ];
  
  
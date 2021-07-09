import CREATEANDSHAREd from "../../../assets/home/desktop/create-and-share.jpg";
import CREATEANDSHAREt from "../../../assets/home/tablet/create-and-share.jpg";
import CREATEANDSHAREm from "../../../assets/home/mobile/create-and-share.jpg";
import BEAUTIFULSTORIES from "../../../assets/home/desktop/beautiful-stories.jpg";
import DESIGNED from "../../../assets/home/desktop/designed-for-everyone.jpg";


export const cards = [
    { 
        id: "create-and-share",
        title: "Create and share your photo Stories",
        subtitle: "Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.",
        pictureSide: "right",
        color: "black",
        picture: CREATEANDSHAREd,CREATEANDSHAREm, CREATEANDSHAREt,
        buttonText: "Get an invite",
    },
    {
        id: "beautifulstories",
        title: "Beautiful stories every time",
        subtitle: "  We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.",
        pictureSide: "left",
        color: "white",
        picture: BEAUTIFULSTORIES,
        buttonText: "View the stories"
    },
    {
        id: "designed-for-everyone",
        title: "Designed for everyone",
        subtitle: "Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it.",
        color: "white",
        pictureSide: "right",
        picture: DESIGNED,
        buttonText: "View the stories",
    }
];

import { useNavigate } from "react-router-dom";
import { GamepadDirectional } from 'lucide-react';
import { Clapperboard } from "lucide-react";
import{ MessageSquareText} from "lucide-react";
import "./naviguation.css";



const Naviguation = () => {
    const naviguate = useNavigate();

    return (
        <div className="nav_bar">
            <button onClick={() => naviguate("/video")}><Clapperboard /></button>
            <button onClick={() => naviguate("/dashboard")}><GamepadDirectional /></button>
            <button onClick={() => naviguate("/forum")}><MessageSquareText /></button>
        </div>
    )

}

export default Naviguation;
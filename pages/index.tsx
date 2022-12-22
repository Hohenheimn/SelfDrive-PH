import Head from "next/head";
import Image from "next/image";
import Feedbacks from "../components/User/Feedbacks";
import Promotional from "../components/User/Promotional";
import VehicleList from "../components/User/VehicleList";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Promotional />
            <VehicleList />
            <Feedbacks />
        </>
    );
}

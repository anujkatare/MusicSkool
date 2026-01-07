import { CardSpotlight } from "@/components/ui/card-spotlight";
import Link from "next/dist/client/link";

export function Card(props: {
    title: string;
    description: string;
    price: number;
    image: string;
}) {
  return (
    <CardSpotlight
    className="h-165" >
        <img src={props.image} className="w-full h-100 object-cover rounded-lg" />
      <p className="text-xl font-bold relative z-20 mt-2 text-white">
        {props.title}
      </p>
      <div className="text-neutral-200 mt-4  relative z-20">
        {props.description}
        <ul className="list-none  mt-2">
          ₹{props.price}

        </ul>
      </div>
      <Link
      
      href={''}>
       view course
      </Link>
    </CardSpotlight>
  );
}


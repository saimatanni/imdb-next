"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsHandThumbsUp } from "react-icons/bs";

const Card = ({ result }) => {
  console.log("result.id", result);
  return (
    <div className="transition-shadow duration-200 rounded-lg cursor-pointer group sm:hover:shadow-slate-400 sm:shadow-md sm:border sm:border-slate-400 sm:m-2">
      <Link href={`/movie/${result.id}`}>
        <Image
          className="transition-opacity sm:rounded-t-lg group-hover:opacity-75"
          height={300}
          width={500}
          alt="card-img"
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
        />
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>
          <p className='flex items-center'>
            {result.release_date || result.first_air_date}
            <BsHandThumbsUp className='h-5 ml-3 mr-1'/>
            {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;

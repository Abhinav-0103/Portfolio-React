import React from 'react';

const skills = [
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/eb0843b1adb22478e8f30d7fe89b377ebc6d5e85-280x280.png", level: "40%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/bfa4bb53523b50509efe860f501ce2c341b576b7-300x300.png", level: "80%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/e2517922180f2653be0e25e100a9d8ea655b55f4-920x500.png", level: "40%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/b9df410a113b7c6a81c177135f3e7a3521e98274-540x304.png", level: "75%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/ff00c08760983e0e037aaf6ab4e004f4d147276a-383x383.png", level: "85%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/94ea83d6de3e424834d9103b9fbf240a69e09677-1200x630.png", level: "30%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/e17b7d3e0e48a3cf20302f84c5c823123182ea1d-1626x1347.png", level: "30%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/a96916385b780e5a5118279cd12dca8e92a42491-860x989.png?rect=29,102,802,758", level: "70%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/4e71637150747076accb322e2181e922daf53747-800x600.png", level: "90%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/c3b8cfafe5d50fcada2ef55b4c0256e202b7e84e-225x225.png", level: "70%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/531ef67826d0970f42dfbccc06a99054f4afc557-1200x1200.png", level: "80%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/f444fc721977a788277add5b8838ff797b581ff3-259x194.png", level: "50%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/5f413b506d01f730b87036f01ddd2aabb88edf41-1200x800.png", level: "90%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/4d024d575b997b26a1db8086bd2d152f09904ed9-512x512.png", level: "90%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/f9b7b5ba8784b6f2443c1c0843476837489b668c-1200x768.png?rect=411,88,384,359", level: "70%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/92be0504b38168369d8a9f999d6f8622394dab18-800x600.webp", level: "70%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/47b62b499887dbbf2312ed25db95035201ccfb10-1920x1080.webp?rect=395,10,1111,1070", level: "80%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/3fc3825d0e46d968c0da7a482db166d09f749580-512x360.png", level: "90%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/1325538be42bf3fb23e0c4b83a9164ec479530d5-736x736.jpg", level: "80%" },
  { image: "https://cdn.sanity.io/images/xbn4zmfs/production/f74dbc6eb29149f30e5241925000cd050ff4594f-1200x630.png", level: "40%" }
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen px-4 py-10">
      <h2 className="text-4xl mb-10 font-light tracking-widest text-gray-600 text-center">
        S K I L L S
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex cursor-pointer justify-center items-center"
          >
            <img
              src={skill.image}
              alt={`Skill ${index}`}
              className="rounded-full border-2 border-green-600 object-cover w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
            />
            <div className="absolute opacity-0 group-hover:opacity-90 transition duration-300 ease-in-out group-hover:bg-white w-16 h-16 md:w-20 md:h-20 2xl:w-28 2xl:h-28 rounded-full flex items-center justify-center">
              <p className="text-lg md:text-xl font-bold text-black">
                {skill.level}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
import React from "react";
import setup from'../Assets/setup.png'

const About = () => {
  const info = [
    { text: "Years experience", count: "01" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "06" },
  ];
  return (
    // <section id="about" className="py-10 text-black">
    //   <div className="text-center mt-8">
    //     <h3 className="text-4xl font-semibold">
    //       About <span className="text-cyan-600">Us</span>
    //     </h3>
    //     <p className="text-black my-3 text-lg">My introduction</p>
    //     <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
    //       <div className="p-2">
    //         <div className="text-black my-3">
    //           <p className="text-justify  text-xl leading-7 w-11/12 mx-auto">
    //           Started as a small picture marketplace idea is now a fully functional ecommerce website.
    //           We work in the motto quality over quantity. All the pictures are within our quality standard.
    //           Hope to hear more from you.
    //           <br></br>
    //           <br></br>Team,
    //           <br></br>PicLab.
    //           </p>
    //           <div className="flex mt-10 items-center gap-7">
    //             {info.map((content) => (
    //               <div key={content.text}>
    //                 <h3 className="md:text-4xl text-2xl font-semibold text-black">
    //                   {content.count}
    //                   <span className="text-cyan-600">+</span>{" "}
    //                 </h3>
    //                 <span className="md:text-base text-xs">{content.text}</span>
    //               </div>
    //             ))}
    //           </div>
    //           <br />
    //           <br />
    //         </div>
    //       </div>
    //       <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
    //         <div className="lg:w-96 h-full sm:w-10/12 w-11/12 max-w-sm ">
    //           <img
    //             src={setup}
    //             alt=""
    //             className="w-full object-cover bg-cyan-600 rounded-xl"
    //           />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
<div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-5xl">Nuxt development is carried out by passionate developers</h2>
          <p class="text-xl mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p class="text-xl mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
        <div class="lg:w-8/12">
          <img src={setup} alt="" loading="lazy" className="rounded-xl"/>
        </div>
      </div>
  </div>
</div>
  );
};

export default About;
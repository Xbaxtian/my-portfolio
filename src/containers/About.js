import React from 'react';
import Columns from '../components/Columns';

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto text-justify">
        <h2 className="title">About</h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          eget magna sed justo sagittis molestie ut eu lectus. Vestibulum congue
          lobortis elit, eu mattis eros feugiat sit amet. Morbi convallis diam
          quis tortor vestibulum, vel euismod justo luctus. Vestibulum ante
          ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Integer ornare eu arcu eu sagittis. Ut venenatis lectus vitae
          tellus condimentum lobortis. Vivamus et vulputate libero. Nunc feugiat
          non elit et efficitur. Donec vitae augue magna. Morbi dui est, varius
          a tellus sed, suscipit condimentum eros.
        </p>
        <Columns />
      </div>
    </section>
  );
};

export default About;

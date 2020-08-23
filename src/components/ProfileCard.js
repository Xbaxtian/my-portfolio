import React from 'react';
import Card from './ui/Card';
import ProfilePicture from '../components/ProfilePicture';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const ProfileCard = () => {
  return (
    <div>
      <Card className="max-w-sm">
        <ProfilePicture />
        <div className="mt-6">
          <h2 className="title">Sebastian Postigo</h2>
          <p className="mb-6">Software Engineer</p>
          <ul className="text-gray-800 leading-normal mb-6">
            <li className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
              <a href="mailto:xbaxtian@hotmail.com">xbaxtian@hotmail.com</a>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faPhone} className="mr-3" />
              <a href="tel:(+51) 997 068 009">(+51) 997 068 009</a>
            </li>
            <li className="mb-2">
              <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
              <a
                href="https://www.linkedin.com/in/xbaxtian/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faInstagram} className="mr-3" />
              <a
                href="https://www.instagram.com/xbaxtian/"
                target="_blank"
                rel="noreferrer"
              >
                @Xbaxtian
              </a>
            </li>
          </ul>

          <p className="text-left">
            Software Engineering wanting to grow in the field of software
            development, engineering and architecture. My skills are based on
            theory and good practices so I have the ability to adapt to the tool
            that is required.
          </p>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;

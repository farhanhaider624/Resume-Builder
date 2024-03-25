import React, { useState } from "react";
import styles from "./Editor.module.css";
import InputControl from "../InputControl/InputControl";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );

  const basciInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Name"
          placeholder="Enter your full name eg. Farhan Haider"
        />
        <InputControl
          label="Title"
          placeholder="Enter your title eg. Frontend Developer"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Linkedin Link"
          placeholder="Enter your Linkedin profile link"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter your Github profile link"
        />
      </div>
      <div className={styles.row}>
        <InputControl label="Email" placeholder="Enter your email" />
        <InputControl label="Phone" placeholder="Enter your phone number" />
      </div>
    </div>
  );

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter title eg. Frontend Developer"
        />
        <InputControl
          label="Company Name"
          placeholder="Enter company name eg. amazon"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Certificate Link"
          placeholder="Enter certificate link"
        />
        <InputControl
          label="Location"
          placeholder="Enter location eg. Remote"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placeholder="Enter start date of work"
        />
        <InputControl
          label="End Date"
          type="date"
          placeholder="Enter end date of work"
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
      </div>
    </div>
  );

  const projectBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl
          label="Title"
          placeholder="Enter the title eg. Chat app"
        />
        <InputControl
          label="Overview"
          placeholder="Enter basic overview of project"
        />
      </div>
      <div className={styles.row}>
        <InputControl
          label="Deployed Link"
          placeholder="Enter deployed link of project"
        />
        <InputControl
          label="Github Link"
          placeholder="Enter github link of project"
        />
      </div>
      <div className={styles.column}>
        <label>Enter Project Description</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <InputControl label="Title" placeholder="Enter title eg. B.tech" />
      </div>
      <InputControl
        label="College/School Name"
        placeholder="Enter name of your college/school"
      />
      <div className={styles.row}>
        <InputControl
          label="Start Date"
          type="date"
          placecholder="Enter start date of this education"
        />
        <InputControl
          label="End Date"
          type="date"
          placecholder="Enter end date of this education"
        />
      </div>
    </div>
  );

  const achievementBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>List your achievements</label>
        <InputControl placeholder="Line 1" />
        <InputControl placeholder="Line 2" />
        <InputControl placeholder="Line 3" />
        <InputControl placeholder="Line 4" />
      </div>
    </div>
  );

  const summaryBody = (
    <div className={styles.detail}>
      <InputControl
        label="Summary"
        placeholder="Enter your objective/summary"
      />
    </div>
  );

  const otherBody = (
    <div className={styles.detail}>
      <InputControl label="Other" placecholder="Enter something" />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo:
        return basciInfoBody;
      case sections.workExp:
        return workExpBody;
      case sections.project:
        return projectBody;
      case sections.education:
        return educationBody;
      case sections.achievements:
        return achievementBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>
      <div className={styles.body}>
        <InputControl label="Title" placeholder="Enter Section Title" />
        <div className={styles.chips}>
          <div className={styles.chip}>
            <p>Project 1</p>
            <X />
          </div>
          <div className={styles.chip}>
            <p>Project 2</p>
            <X />
          </div>
        </div>
        {generateBody()}
      </div>
    </div>
  );
}

export default Editor;

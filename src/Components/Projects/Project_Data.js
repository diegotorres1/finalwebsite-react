import React from 'react';

export var p_list = [
  'Title',
  'Image',
  'Definitions',
  'Documents',
  'Description',
  'Details'

]
export var p_data = {
  'project_key' :
    {
      'Title' : 'Name',
      'Definitions' : {
        'word1' : 'Meaning of the word1',
        'word2' : 'Meaning of the word2'
      },
      'Documents' : {
        'document_name' : {'document_data' : 'This is the document', 'document_src' : 'link'}
      },
      'Description' : (
        <p>Description</p>
      ),
      'Details' : (
        <p>Details</p>
      ),
      'Image' : 'src_path'

    },
    'zotbins' :
      {
        'Title' : 'Zotbins',
        'Definitions' : {
          'Divergent Rates' : 'The rate at which trash is diverted from being disposed at a landfill.',
        },
        'Documents' : {
          'Zotbins Github' : {'document_data' : 'Github Link -', 'document_src' : 'https://zotbins.github.io/'}
        },
        'Description' : (
          <p>The ZotBins System is an ongoing project with a team of 11 people. The Zotbins System is website with “smart bins” deployed in various locations (i.e. buildings, college campuses, cities) that can accurately measure and record the amount of waste in each bin. The main purpose of this project is to help keep communities clean, make waste management more efficient, and encourage the practice of zero waste (diverting waste away from landfill). The 3 core features of this project are (1) to collect real-time data, (2) to manage a leaderboard system, and (3) to provide waste guidance. Collecting real-time data on bin fullness and weight of waste of each smart bin provides facilities management or city planners to calculate useful statistics (e.g. divergence rates or bin usage frequency). It also helps determine the efficacy of certain zero waste resources (e.g. more signage, trash sorters, different bin designs, etc.).</p>
        ),
        'Details' : (
          <p>The project was separated into 2 teams, hardware and software. I was apart of the hardware team. While on the project research was done on the sensors that would be used : ultrasonic, IR Break Beam, and load cells. There were plenty of open source material on how to work the sensors which was important because the Zotbins project is designed to be open-source and simple to implement for other students. <br/><br/>In this project my hardware experience increased because I worked with soldering, laser cutting, and general purpose tools to construct the frame and build the electronic components. I also had to document and create a tutorial for each of the parts created. </p>
        ),
        'Image' : '/Resources/Projects/zotbins/full_zotbins_logo.png'
      },
  'machine_learning' :
    {
      'Title' : 'Deep Learning Car Counter',
      'Definitions' : {
        'YOLO' : 'You only look once (YOLO) is a state-of-the-art, real-time object detection system. On a Pascal Titan X it processes images at 30 FPS and has a mAP of 57.9% on COCO test-dev.',
        'H2-Station' : 'Hydrogen Fueling Station is much like a typical gas station but instead of cars filling up on gasoline, they instead fill up on H2.'
      },
      'Documents' : {
        'Darknet Open Source' : {'document_data' : 'Darknet is an open source neural network framework', 'document_src' : 'https://pjreddie.com/darknet/'}
      },
      'Description' : (
        <p>In this project the number of cars in a given queue in the H2 station was found using the neural network framework, Darknet. There is also an associated transaction history that goes along with the H2 station. The goal was to compare the size of the queue in a given time period to the number of transactions in the same time period. This is important in the design of the H2 station because unlike typical gas stations where the wait times are fairly linear in proportion to the size of the queue, in an H2 station this can take significantly longer. This is because they rely on special technologies to prepare the H2 to be safely pumped into the vehicle. Do to the amount of time that customers have to wait to receive their H2, they sometimes leave the queue and go to another H2 station, or come back at a later time. Using the size of the queue as measured by the NN, we can determine the number of cars that leave the station while they are in the queue. This can assist with designing the station to meet the demand, and provides informative details on the patterns of drivers.</p>
      ),
      'Details' : (
        <p>In this project I am utilizing Darket, which is an open source neural network framework written in C and CUDA. The model was trained on the image coco dataset. The accuracy worked fairly well for our application, but needed to be improved using our own image set for our particular usage. We trained our own model but found that the model became overfitted for our data. To fix the data set composed of 1000 images, we increased the number of images to 10,000 to improve our accuracy. Also we only used gray scales of the images.<br /><br />
        This project improved my understanding on the vocabulary of deep learning, and also learned how to manipulate the variables in the Darknet framework to classify the vehicles in our scene. While doing this project our team read into other image classification systems as well as other deep learning model architectures.
        </p>
      ),
      'Image' : '/Resources/Projects/machine_learning/darknet.png'

    },
  'mysql_database' :
    {
      'Title' : 'HiGRID MySQL Database',
      'Definitions' : {
        'Databases' : 'Great tools for storing information in a central repository for quick and easy remote access to essential tabular data.',
        'MySQL' : 'A relational database management system is a collection of software that enables administrators of the database to alter, route, create and manage their data.'
      },
      'Documents' : {
        'Research Proposal' : {'document_data' : 'This is the document', 'document_src' : '/Resources/Projects/mysql_database/research_proposal.pdf'},
        'Documentation' : {'document_data' : 'Full version only available at A.P.E.P Private', 'document_src' : '/Resources/Projects/mysql_database/wiki.pdf'},
        'Presentation' : {'document_data' : 'Basic principles', 'document_src' : '/Resources/Projects/mysql_database/powerpoint.pdf'}
      },
      'Description' : (
        <p>The objective of my research project was to bring the research organization's (Advanced Power and Energy Program) essential data into a database for a more streamlined and organized approach rather than their current means of sharing data through a network drive. While the network drive is convenient to share information by dragging and dropping files into their respective folders, things easily become disorderly. Frequently used files become more and more redundant across multiple users within the same network drive. Files are more vulnerable to malicious attacks due to weak security constraints. Files can also be easily manipulated involuntarily providing false data sets. To address these issues, a central database was created.</p>
      ),
      'Details' : (
        <p>The primary use of the database is to act as a data repository for their analysis software HiGRID (Holistic Grid Resource Integration and Deployment). The purpose of this software is to advise the deployment of renewable power generation and supporting technologies based on the shifting climates, renewable technologies, populations, and policies. This software makes great use of information stored in .xls files. My objective was to incorporate query capabilities to MATLAB to interact with the higrid database.
          While software exists to harmonize MATLAB and your choice of database, those solutions can be costly. So the idea came up, why not make an effective and specifically tailored MySQL interface for the HiGRID tool for no cost.</p>
      ),
      'Image' : '/Resources/Projects/mysql_database/higridplusdatabase.png'
    },
  'ti_robotics' :
    {
      'Title' : 'Texas Instruments Robotics Systems Learning Kit Curriculum',
      'Definitions' : {
        'Microcontroller' : 'A microcontroller is a computer that is fully integrated into a single chip. Micro-controllers have found extreme prevalence in everyday life  From toasters to fridges, from security systems to the next big childrens toy. With the invention of super powerful processors micro-controllers can provide enough computational power for most day to day tasks'
      },
      'Documents' : {
        'Ti Website' : {'document_data' : 'TI Robotics System Learning Kit', 'document_src' : 'https://university.ti.com/en/faculty/ti-robotics-system-learning-kit/ti-robotics-system-learning-kit'}
      },
      'Description' : (
        <p>The objective of this project was to determine if this robotics kit could be utilized as part of the learning material in the 70 series courses for introduction into the Electrical Engineering. Students selected by EECS professors were chosen to evaluate the relative importance of this project, by gauging the difficulty of the core lessons taught in lectures and labs provided by the curriculum associated with the robotics kit</p>
      ),
      'Details' : (
        <p> I was chosen by Henry P. Lee, a professor of Electrical Engineering and Computer Science. Although I also worked very closely with Quoc-Viet Dang, an  assistant professor of teaching, of Electrical Engineering and Computer Science. We established clear communication and often talked about the work done on the robot to track progress.
        <br /><br />
        There was also close communication with the developers of the curriculum, Questions regarding assembly of the of the robot were logged onto a google sheet that was shared among the various students and professors involved with this project. The sheet was then read and answered by the people over at TI. If parts were ever needed a simple parts request was submitted by the accompanying professor.

        The robot uses a motor board and the MSP42 board to control the robot. It uses a brushed DC motor to move around and varies the speed in each of the motors to turn. The robot also utilizing bumper sensors on the front of the robot to detect obstacles and collisions with its surroundings. The code was written in C language within Code Composer Studio.

        There was plenty of soldering and desoldering that had to be done in order to build this robot as there were many connections that between the boards and the sensors. I became more familiar with soldering equipment and quickly became proficient.
        <br /><br />
        More comfortability in coding with this board, and TI boards in general. There is a larger emphasis on bitwise manipulation and often requires the lense of a computer engineer rather than a computer scientist. Learned how to debug using the debugger provided by Code Composer Studio, and being observant during the operation of the robot.
        <br /><br />
        This project was done in tandem with a course that I had taken that taught microcontroller systems. Things taught in the curriculum of the TI project often supplemented the ideas taught in the course. Questions about the online material were frequently asked in class by myself and my project partner.

        </p>
      ),
      'Image' : '/Resources/Projects/ti_robotics/tiBanner.png'

    },
  'iot_device_1' :
    {
      'Title' : 'IOT Home Security Device',
      'Definitions' : {
        'IOT' : 'Internet of Things is a system of  communicating computing devices and sensors with the ability to transfer information without the need for human intervention. Advancements in communication, with emergent technologies in wireless internet, as well as demand in the sector of big data analytics has led to a prevalent interest in using IOT to solve day to day problems like traffic in major freeways, HVAC Systems, and sustainability efforts involving optimization and automation.'
      },
      'Documents' : {
        'Documentation' : {'document_data' : 'Presentation', 'document_src' : '/Resources/Projects/iot_device_1/113 Final Project Report.pdf'}
      },
      'Description' : (
        <p>IOT has found its way into homes and era of smart homes has began. Although smart homes had always been a dream since the 20th century, the possibility has always been limited by economics and practicality. With powerful computational devices being more affordable than ever, and with the research underway for integration of IOT, the smart is no longer a dream but the inevitable future of the middle class household.</p>
      ),
      'Details' : (
        <p>The Home security device made use of a Raspberry Pi. Ultrasonic sensors were used to detect motion, a humidity and temperature sensor were used as weather indicators, and a push button switch was used to control the state of the device.
        <br /><br />
        The Raspberry Pi is connected with the LCD, ADC with inputs from two sensors (Thermistor and Light Dependent Resistor (LDR)), ultrasonic sensor, few switches and LEDs, and the internet. The IOT device had two operating modes: normal mode and security mode.
        The normal mode is the operational mode that functions while you are present at home. In this case, the Raspberry Pi measures the temperature and displays it on the LCD, beside some other information such as the clock and the date.
        <br /><br />
        The security mode is the operational mode that is activated when you leave your house via a switch. In this mode, the Raspberry Pi would keep reading data from the LDR and the ultrasonic sensor to detect any suspicious events such as someone crossing the ultrasonic sensor or a light is turned on. If any suspicious event is detected, the Raspberry Pi sends an email to you reporting this suspicious event.
        </p>
      ),
      'Image' : '/Resources/Projects/iot_device_1/iot.jpg'

    },
  'iot_device_2' :
    {
      'Title' : 'Switcheroo : IOT Smart Home Device',
      'Definitions' : {
        'Smart Home' : 'The idea of improving the comfortability, efficiency, and performance of a house. The concept is giving the house a computational footprint. The computational integrates all aspects of the house also including connectivity to other households and the city in general. Comfortability can be increases by controlling the HVAC system autonomously, efficiency can be improved with proper water and energy management. Performance is reflected in the way humans react and  perform due to changes in daily tasks performed by the smart home. ',
        'Hackathon' : 'A sprint to complete a self assigned project within a given small amount of time. There is typically a competition involved with monetary prizes.'
      },
      'Documents' : {
        'Documentation' : {'document_data' : 'Switcheroo Report', 'document_src' : '/Resources/Projects/iot_device_2/Switcheroo Report.pdf'}
      },
      'Description' : (
        <p>Switcheroo is a take on IOT, focusing on improving the efficiency and ease of use in a household. The basis of the project is to control standard GSI outlets from your smartphone. Having the ability to turn off devices remotely can have great improvements in energy sustainability. By making these GSI Outlet switches accessible from your phone certain devices in the house can be manually turned on and off. This adds convenience to person living there. The future applications of concepts similar to Switcheroo is to make certain switch activations autonomous. Turning things on and off should be optimized and done without the need for human intervention.</p>
      ),
      'Details' : (
        <p>Switcheroo was made during a hackathon in a team of 4 people. Half of the team had been designated handling the hardware components while the second half had been assigned to creating the application to connect to the hardware. An Arduino Mega was used with a bluetooth module to receive incoming data from the application on the phone. After the data was received the decoder translated that information to be outputted to the any of the 8 available switches which was connected to a GSI outlet.
        <br /><br />
        Having prior experience to Android Studio assisted me with the initial steps in creating the an app, but this additional work had me learn more about user interface and design. Creating the app was a first step towards creating an application that was marketable.
        <br /><br />
        Although my role was software orientated, I also helped with the circuitry and some of the Arduino code.
        </p>
      ),
      'Image' : '/Resources/Projects/iot_device_2/switcheroo.png'

    },
    'renewable_energy_device' :
      {
        'Title' : 'Self-Adjusting Solar Panel',
        'Definitions' : {
          'Renewable generation' : 'the creation of electrical energy from a renewable sources such as solar, wind, and hydro. With enough infrastructure like energy storage, and generation sources like solar panels, wind turbines, and water turbines, the entirety of the U.S. electrical grid could be supported without the need for non-renewable sources.'
        },
        'Documents' : {
          'Documentation' : {'document_data' : 'Solar Panel Report', 'document_src' : '/Resources/Projects/renewable_energy_device/Solar Panel Report.pdf'}
        },
        'Description' : (
          <p>Self-Adjusting Solar panel orientates itself to increase the total intensity of light that falls onto the solar panel. By increasing this, the amount of energy captured increases and solves some of the issues relating to inefficiencies by capturing light in the most optimal sense. This was accomplished by having the panel stationed on a single axis which was controlled by a servo. The angle of light was calculated by 2 opposing light dependent resistors to gather information of potential differences measures from both.
              <br /><br />
              This project is an affordable take on an existing technology that could be easily implemented into an average, middle class household. Adding affordability as a factor would greatly promote the adoption of more renewable technologies thereby decreasing the overall carbon footprint. Removing dependence on non -renewable generation is the ultimate goal of this project.</p>
        ),
        'Details' : (
          <p>Used SolidWorks for the first time. Difficult to learn without a classroom setting and T.A.s to assist when you get stuck. Its easy to be stuck on a problem that has a simple solution because all of the tools that are provided are so new to you.
                <br /><br />
                Used 3D printers available with my membership to the UCI 3D Printing Club. There are members there who are always helping those that are inexperienced with the equipment. From their students assisted me with using the Printrbot Simple. Also received help from resident iEEE club members to help me with using their equipment to drill a hole for the axle.
                <br /><br />
                Used Arduino board for the first time. Gained experience with entry level microcontroller boards.
              </p>
        ),
        'Image' : '/Resources/Projects/renewable_energy_device/solar_panel.png'

      },
  'processor_design_and_verification' :
    {
      'Title' : 'Processor Design And Verification',
      'Definitions' : {
        'ISA' : 'the Instruction Set Architecture is the set of instructions that is directly in control of the processor. These instructions provide the only means of direct manipulation of any computational task.',
        'Verification' : 'to ensure that the correct outputs and behavior are elicited in response to certain inputs. Processor verification ensure that the entire ISA produces the correct results.',
        'Synthesis' : 'The software tool, QuestaSim is a simulation and debug engine for advanced verification. A feature known as synthesis allows for a designed circuit to be accurately modeled through simulated steps to ensure that the processor is working as intended.'
      },
      'Documents' : {
        'Documentation' : {'document_data' : 'Lab Report', 'document_src' : '/Resources/Projects/processor_design_and_verification/Lab3Report.pdf'}
      },
      'Description' : (
        <p>This project was assigned in EECS 112L  (Organization of Digital Computers). The task was to create a pipelined processor. We were given a list of 37 instructions to implement into our processor design. The first step was to implement these 37 instructions and successfully test all the instructions given a positive table to verify that our results are correct. Once we verified that our set of input instructions were correct, we then had to create a pipelined processor design to increase the cycle speed of the processor. Multiple states of different instructions are being executed at once so registers and other logic gates are implemented to account for storing information and handling new sets of possible instruction pathways.</p>
      ),
      'Details' : (
        <p>The main strength obtained from this project was an increase in organizational skills. There are roughly 10 components (depending on implementation ) to consider when designing the pipelined processor. The communication between these components are heavily reliant on the instructions that are passed to them, so you have to consider every instruction and how it interacts with the whole system.
                <br /><br />
                Experience from using industry software QuestaSim to correctly model and simulate our processor designs. Simulated results could then be read and fine tuned to meet the design specifications of the project.</p>
      ),
      'Image' : '/Resources/Projects/processor_design_and_verification/datapath_banner.PNG'

    },
  'fpga_board' :
    {
      'Title' : 'FPGA Simple Processor Design',
      'Definitions' : {
        'FPGA' : 'Meaning A Field Programmable Gate Array is a device used to programmably set new functionality to the board.  This is different from other boards which are manufactured for specific design tasks. Allows for testing of logic circuitry before total implementation. This is useful for students and manufactures alike to test their designs.'
      },
      'Documents' : {
        'Midterm Project Doc' : {'document_data' : 'Lab outline', 'document_src' : '/Resources/Projects/fpga_board/pooriam_midtem_project.pdf'},
        'Midterm Project Source' : {'document_data' : 'Lab source code submition', 'document_src' : '/Resources/Projects/fpga_board/MidtermALU.rar'}
      },
      'Description' : (
        <p>This project final was assigned in EECS 31L Introduction to Digital Logic Library. The purpose of this project to create and implement a simple processor design onto a FPGA. Given a simple set of 10 instructions, our team first started by creating the important modules of a generic processor: ALU, Register File, Memory, Shift Register, Instruction File, and the PC. Once each team member had finished their set of modules to work on, we worked on connecting each aspect of the virtual circuit together, debugging the system during the FPGA programmable stage.</p>
      ),
      'Details' : (
        <p>First time experience, learning to effectively work as a team. Despite the team being comprised of friends, we worked well together.
                <br /><br />
                First time experience, working with hardware descriptive languages. Interesting avenue of programming with subtle differences in the way to approach parallel and concurrent problem solving.
                <br /><br />
                Learned how a processor works given that the previous course described the types of logic gates associated with computer design. Exciting to finally put those hand drawn logic gates to actual use.</p>
      ),
      'Image' : '/Resources/Projects/fpga_board/fpga_banner.PNG'

    },
}

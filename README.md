# Visual Continuous Delivery Pipeline (CDEP) Setup

## Overview
VCDEP is designed to give instructors the ability to quickly and easily setup
an automated continous delivery system that they can use in a Software
Engineering course and engages students visually to teach continuous delivery concepts.

VCDEP offers orchestration of both PHP and Java projects through the
continuous integration tool Jenkins. The main features of VCDEP are the
following:

<ul>
<li> Static Analysis </li>
<li> Unit Testing </li>
<li> Integration Testing </li>
<li> and Automated Delivery to a Staging Environment </li>
</ul>

## Installation
Prerequisites:
<ul>
<li> Ubuntu Xenial 16.04 Server </li>
<li> Docker  <a href="https://docs.docker.com/install/linux/docker-ce/ubuntu/">(Installation Guide)</a>. You must also follow the post installation instruction which can be found <a target="_blank" href="https://docs.docker.com/install/linux/linux-postinstall/">here</a></li>
<li> Docker Compose <a target="_blank" href="https://docs.docker.com/compose/install/#install-compose">(Installation Guide)</a>. Make sure to select the Linux installation guide from the available list.</li>
<li> Git </li>
<li> SSH keys for GitHub. You can find the instructions for generating and
setting up the SSH keys <a target="_blank"
href="https://help.github.com/articles/connecting-to-github-with-ssh/">here</a>. Once you have the keys, place them in the .ssh folder in the jenkins_server folder. </li>
</ul>

Steps:
```bash
git clone https://github.com/ncoop57/jenkins_server_setup.git
cd jenkins_server_setup
bash start.sh
```

Once the start.sh script finishes and you see that the master container is
fully up and running, navigate to http://<jenkins_ip_address>/securityRealm/firstUser
to create the admin account.

## Activities
We have provided premade activities for both PHP and Java, which serve as
a template for you to create your own and use. We believe these activities give
a good visual aspect to the students since they can instantly see the changes
they make once it passes all the tests.

The PHP project and activity assignment document can be found <a target="_blank" href="https://github.com/ncoop57/php_activity">here</a>
And the Java project and activity assignment document can be found <a target="_blank" href="https://github.com/ncoop57/java_activity">here</a>

## Known Issues
<ul>
<li>Memory leak from successive stops and starts even when cleanup.sh script is
ran. This is due to some of the volumes from the removed docker containers
persist and they are located in a tough to script spot to remove so must be
done manually until a fix is made. The usual folder you can find the volumes is
in /var/lib/docker/volumes/. You will need to be root to access this folder in
most cases. Do not remove the metadata.db file.</li>
<li>The VCDEP server sometimes starts and tries to connect to the MongoDB
container before it is fully running resulting in it crashing. Fixes have been
attempted but it does not solve it 100% of the time. We suggest restarting the
VCDEP server once the everything is up and running by navigating to the
vcdep_server folder, opening the server.js file and resaving it. This causes
nodemon to think a change has been remade and restart the server.</li>
<li>Docker requires their containers to be lower case and unique, so we
programmed docker to use the name of the repositories. We automatically
downcase the repositories to lowercase for this reason, however, this also
happens for the url addresses for staging and we noticed that students had
difficulty finding their repositories for this reason because on github it
shows as uppercase so they use that for the url and get a 404 not found. So,
when you make the repositories, please use all lowercase names to avoid such
confusion.</li>
</ul>

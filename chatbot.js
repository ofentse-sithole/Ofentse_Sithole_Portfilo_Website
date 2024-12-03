const chatbot = {
    init() {
        document.getElementById('open-chatbot').addEventListener('click', () => {
            document.getElementById('chatbot').style.display = 'block';
            document.getElementById('open-chatbot').style.display = 'none';
            this.addMessage('chatbot', "Hello! I'm Ofentse's virtual assistant. How can I help you today?");
        });

        document.getElementById('close-chatbot').addEventListener('click', () => {
            document.getElementById('chatbot').style.display = 'none';
            document.getElementById('open-chatbot').style.display = 'block';
        });

        document.getElementById('send-chatbot').addEventListener('click', () => {
            const input = document.getElementById('chatbot-input');
            const message = input.value;
            if (message.trim() !== '') {
                this.addMessage('user', message);
                const response = this.generateResponse(message.toLowerCase());
                this.addMessage('chatbot', response);
                input.value = '';
            }
        });

        document.getElementById('clear-chatbot').addEventListener('click', () => {
            document.getElementById('chatbot-messages').innerHTML = '';
        });
    },

    generateResponse(message) {
        if (message.includes('hello') || message.includes('hi')) {
            return "I hope you're doing well! How can I assist you today?";
        } else if (message.includes('skills') || message.includes('experience')) {
            return "Ofentse is skilled in HTML, CSS, JavaScript, Java, C#, SQL, and more. Would you like specific details about any technology?";
        } else if (message.includes('contact')) {
            return 'You can reach Ofentse at <a href="mailto:otsithole07@gmail.com">otsithole07@gmail.com</a> or connect on <a href="https://www.linkedin.com/in/ofentse-sithole-145943264/" target="_blank">LinkedIn</a>.';
        } else if (message.includes('projects')) {
            return 'Ofentse has worked on several projects including AviaryQuest, Medical Suite, HR Harmony System, and many more. Which project would you like to know more about?';
        } else if (message.includes('medical suite')) {
            return "Medical Suite is a comprehensive system for booking doctor appointments, including patient, doctor, and admin portals. It was developed using HTML, CSS, Firebase Authentication, Firebase Firestore, and Kotlin.";
        } else if (message.includes('aviaryquest')) {
            return "AviaryQuest is a web application that allows users to book bird watching tours. It was developed using HTML, CSS, JavaScript, and PHP.";
        } else if (message.includes('hr harmony system') || message.includes('hr harmony')) {
            return "HR Harmony System is a web application that allows users to manage employee data, including employee, department, and job title information. It was developed using HTML, CSS, JavaScript, and PHP.";
        } else if (message.includes('disaster alleviation foundation') || message.includes('disaster alleviation') || message.includes('disaster')) {
            return "Disaster Alleviation Foundation Project is a web application that allows users to manage disaster-related donations and facilitate aid distribution securely. It was developed using C#, Azure SQL, and Azure DevOps.";
        } else if (message.includes('github')) {
            return "You can find Ofentse's GitHub profile at <a href='https://github.com/ofentse-sithole' target='_blank'>https://github.com/ofentse-sithole</a>.";
        } else if (message.includes('string api') || message.includes('string')) {
            return "String API Project WebCore.API that takes a string as input, returns the reversed string, and checks if the input string is a palindrome, accessible via an endpoint.";
        }
        else if (message.includes('list') || message.includes('please list projects')) {
            return "A list of Ofentsee's projects: AviaryQuest, Medical Suite, HR Harmony System, Disaster Alleviation Foundation Project, and String API Project WebCore.API.";
        }

        return "I'd be happy to tell you more about Ofentse's work and experience. Feel free to ask about his skills, projects, github profile or contact information.";
    },

    addMessage(sender, text) {
        const chatMessages = document.getElementById('chatbot-messages');
        const messageContainer = document.createElement('div');
        messageContainer.className = `message-container ${sender}-container`;

        const label = document.createElement('div');
        label.className = 'message-label';
        label.textContent = sender.charAt(0).toUpperCase() + sender.slice(1);
        messageContainer.appendChild(label);

        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.innerHTML = text; // Use innerHTML to render HTML content
        messageContainer.appendChild(messageDiv);

        chatMessages.appendChild(messageContainer);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};

document.addEventListener('DOMContentLoaded', () => chatbot.init());

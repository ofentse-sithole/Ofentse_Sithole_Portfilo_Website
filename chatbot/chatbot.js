const chatbot = {
    init() {
        document.getElementById('open-chatbot').addEventListener('click', () => {
            document.getElementById('chatbot').style.display = 'block';
            document.getElementById('open-chatbot').style.display = 'none';
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
            return "Hello! I'm Ofentse's virtual assistant. How can I help you today?";
        } else if (message.includes('skills') || message.includes('experience')) {
            return "Ofentse is skilled in HTML, CSS, JavaScript, Java, C#, SQL, and more. Would you like specific details about any technology?";
        } else if (message.includes('contact')) {
            return "You can reach Ofentse at otsithole07@gmail.com or connect on LinkedIn.";
        } else if (message.includes('projects')) {
            return "Ofentse has worked on several projects including AviaryQuest, Medical Suite, and HR Harmony System. Which project would you like to know more about?";
        }
        return "I'd be happy to tell you more about Ofentse's work and experience. Feel free to ask about his skills, projects, or contact information.";
    },

    addMessage(sender, text) {
        const chatMessages = document.getElementById('chatbot-messages');
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
};

document.addEventListener('DOMContentLoaded', () => chatbot.init());
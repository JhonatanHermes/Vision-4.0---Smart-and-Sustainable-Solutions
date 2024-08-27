// Função para exibir o conteúdo correspondente ao item do menu selecionado
function showContent(section) {
    const contentDiv = document.getElementById('content');

    let content = '';

    switch (section) {
        case 'home':
            content = `
                <h2>Conheça o amanhã</h2>
                <p>Nossa missão é liderar a revolução das cidades inteligentes e sustentáveis, 
                oferecendo soluções tecnológicas que otimizam a gestão urbana, reduzem o impacto ambiental 
                e melhoram a qualidade de vida dos cidadãos. Comprometemo-nos a inovar constantemente 
                e a colaborar com parceiros estratégicos para construir um futuro mais verde e eficiente para todos.</p>
            `;
            break;
        case 'about':
            content = `
                <h2>Sobre nossa empresa</h2>
                <p>Iniciamos nossa jornada em Limeira, SP, com o objetivo de transformar a gestão urbana 
                por meio de soluções inovadoras e sustentáveis. Desde então, temos expandido nossos projetos 
                e parcerias, levando nossa experiência em tecnologias inteligentes para otimizar e modernizar cidades. 
                Comprometidos com o desenvolvimento de ambientes urbanos mais conectados e ecológicos, trabalhamos 
                para criar um impacto positivo e duradouro em cada comunidade que atendemos.</p>
            `;
            break;
        case 'contact':
            content = `
                <h2>Contate-nos</h2>
                <p>
                    E-mail: <a href="mailto:contato@inovacidade.com.br">contato@inovacidade.com.br</a><br>
                    Telefone: <a href="tel:+5511987654321">(11) 98765-4321</a>
                </p>
            `;
            break;
        case 'solutions':
            content = `
                <h2>Soluções</h2>
                <ul>
                    <li><strong>Gestão de Energia</strong> 💡<br>Otimize o consumo energético com soluções inteligentes e sustentáveis que reduzem custos e melhoram a eficiência.</li>
                    <li><strong>Transporte Sustentável</strong> 🚲<br>Promova alternativas ecológicas e econômicas para o transporte, incluindo veículos elétricos e sistemas de compartilhamento.</li>
                    <li><strong>Eficiência Operacional</strong> ⚙️<br>Melhore os processos internos com soluções que automatizam tarefas e aumentam a produtividade.</li>
                    <li><strong>Consultoria Ambiental</strong> 🌍<br>Receba orientação especializada para atender às regulamentações ambientais e implementar práticas ecológicas.</li>
                    <li><strong>Tecnologia da Informação</strong> 💻<br>Soluções integradas para otimizar a infraestrutura de TI, garantir segurança e promover inovação tecnológica.</li>
                    <li><strong>Gerenciamento de Resíduos</strong> ♻️<br>Implemente sistemas eficazes de gestão de resíduos que reduzem o impacto ambiental e promovem a reciclagem.</li>
                    <li><strong>Economia Circular</strong> 🔄<br>Adote práticas de economia circular para reduzir desperdícios e criar valor sustentável a partir de recursos reciclados.</li>
                    <li><strong>Treinamento e Capacitação</strong> 📚<br>Ofereça treinamentos e workshops para desenvolver habilidades e conhecimentos essenciais nas áreas de sustentabilidade e tecnologia.</li>
                </ul>
            `;
            break;
        default:
            content = '<p>Seja bem vindo ao futuro.</p>';
            break;
    }

    // Atualiza o conteúdo da div 'content' com o conteúdo correspondente
    contentDiv.innerHTML = content;
}

// Função para mostrar ou ocultar o menu suspenso
function toggleDropdown() {
    document.getElementById('dropdown-content').classList.toggle('show');
}

// Fecha o menu suspenso se o usuário clicar fora dele
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-toggle')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

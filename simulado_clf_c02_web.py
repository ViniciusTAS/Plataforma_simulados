from flask import Flask, render_template_string, request, redirect, url_for, session
import random

app = Flask(__name__)
app.secret_key = 'chave-secreta-simulado'

perguntas = [
{
    "pergunta": "O que descreve uma Região da AWS?",
    "alternativas": [
        "Uma localização específica com alta disponibilidade",
        "Um conjunto de datacenters internacionais",
        "Uma visão global da nuvem",
        "Um conjunto de bancos de dados acessíveis regionalmente"
    ],
    "resposta": 0,
    "explicacao": "Uma Região da AWS é uma área geográfica com múltiplas zonas de disponibilidade isoladas, oferecendo alta disponibilidade."
},
{
    "pergunta": "Qual serviço fornece criptografia de dados em repouso?",
    "alternativas": ["AWS Certificate Manager", "IAM", "Security Hub", "AWS KMS"],
    "resposta": 3,
    "explicacao": "AWS KMS permite gerenciar chaves de criptografia integradas com outros serviços para proteger dados em repouso."
},
{
    "pergunta": "Qual serviço da AWS é um banco de dados NoSQL totalmente gerenciado?",
    "alternativas": ["Amazon Redshift", "Amazon DynamoDB", "Amazon RDS", "Amazon Aurora"],
    "resposta": 1,
    "explicacao": "O Amazon DynamoDB é um serviço NoSQL totalmente gerenciado que oferece desempenho previsível e escalabilidade automática."
},
{
    "pergunta": "Quais serviços da AWS podem hospedar bancos de dados PostgreSQL?",
    "alternativas": [
        "Amazon OpenSearch Service", "Amazon EC2", "Amazon EFS", "Amazon S3", "Amazon Aurora"
    ],
    "resposta": 4,
    "explicacao": "Amazon EC2 permite instalar PostgreSQL manualmente, enquanto o Amazon Aurora oferece suporte gerenciado."
},
{
    "pergunta": "Quais são os benefícios ao mover uma carga de trabalho on-premises para a AWS?",
    "alternativas": [
        "A AWS treina a equipe",
        "A AWS gerencia toda a segurança",
        "Suporte gratuito com TAMs",
        "Alta disponibilidade",
        "Economias de escala"
    ],
    "resposta": 4,
    "explicacao": "AWS oferece alta disponibilidade com infraestrutura redundante e economia de escala reduzindo custos."
},
{
    "pergunta": "Qual serviço captura informações sobre o tráfego de rede de uma instância EC2?",
    "alternativas": ["VPC Reachability Analyzer", "Amazon Athena", "VPC Flow Logs", "AWS X-Ray"],
    "resposta": 2,
    "explicacao": "VPC Flow Logs registra tráfego IP de interfaces de rede, auxiliando em diagnósticos e segurança."
},
{
    "pergunta": "Quais princípios do Well-Architected Framework dão suporte à confiabilidade?",
    "alternativas": [
        "Operações como código",
        "Rastreabilidade",
        "Escalar automaticamente",
        "Implantar globalmente",
        "Recuperar de falhas"
    ],
    "resposta": 2,
    "explicacao": "Escalar automaticamente e recuperar de falhas garantem disponibilidade contínua em situações adversas."
},
{
    "pergunta": "Qual é a vantagem da AWS que minimiza custos variáveis?",
    "alternativas": ["Alta disponibilidade", "Economias de escala", "Alcance global", "Agilidade"],
    "resposta": 1,
    "explicacao": "Economias de escala permitem à AWS oferecer serviços com custos reduzidos à medida que cresce."
},
{
    "pergunta": "Qual é o total de armazenamento oferecido pelo Amazon S3?",
    "alternativas": ["WOMB", "5 GB", "5 TB", "Ilimitado"],
    "resposta": 3,
    "explicacao": "Amazon S3 oferece armazenamento ilimitado, pagando apenas pelo que for utilizado."
},
{
    "pergunta": "O que acontece quando um usuário IAM sem políticas tenta acessar a AWS?",
    "alternativas": [
        "Acesso leitura total",
        "Acesso negado",
        "Acesso à cobrança",
        "Acesso via CLI"
    ],
    "resposta": 1,
    "explicacao": "Usuários IAM não têm permissões até que políticas sejam explicitamente atribuídas."
},
{
    "pergunta": "Qual serviço da AWS fornece capacidade de hospedar banco de dados NoSQL?",
    "alternativas": ["Amazon Aurora", "Amazon DynamoDB", "Amazon RDS", "Amazon Redshift"],
    "resposta": 1,
    "explicacao": "Amazon DynamoDB é o serviço NoSQL da AWS com suporte a chave-valor e documentos."
},
{
    "pergunta": "Qual serviço permite rodar aplicativos pesados em dispositivos leves?",
    "alternativas": ["Amazon AppStream 2.0", "AWS AppSync", "Amazon WorkLink", "AWS Elastic Beanstalk"],
    "resposta": 0,
    "explicacao": "AppStream 2.0 permite streaming de apps do backend da AWS para dispositivos simples."
},
{
    "pergunta": "Como automatizar patches e backups de bancos MySQL na AWS?",
    "alternativas": ["MySQL em EC2", "RDS com MySQL", "CloudFormation com EC2", "Migrar dados para S3"],
    "resposta": 1,
    "explicacao": "Amazon RDS gerencia backups automáticos, patches e failover de bancos MySQL."
},
{
    "pergunta": "Componentes de uma VPN Site-to-Site na AWS:",
    "alternativas": ["AWS Storage Gateway", "Virtual private gateway", "NAT gateway", "Customer gateway", "Internet gateway"],
    "resposta": 1,
    "explicacao": "Uma conexão VPN Site-to-Site requer um Virtual Private Gateway (na AWS) e um Customer Gateway (no local)."
},
{
    "pergunta": "Qual serviço fornece recomendações em tempo real sobre boas práticas?",
    "alternativas": ["Trusted Advisor", "AWS Config", "Security Hub", "Systems Manager"],
    "resposta": 0,
    "explicacao": "O AWS Trusted Advisor analisa segurança, performance e limites para fornecer recomendações."
},
{
    "pergunta": "Responsabilidades do cliente ao usar AWS Lambda:",
    "alternativas": ["Segurança no código", "Escolha de CPU", "Atualizações do SO", "Código da função", "Segurança da infraestrutura"],
    "resposta": 0,
    "explicacao": "O cliente é responsável pelo código e segurança do código executado no Lambda."
},
{
    "pergunta": "Recursos que aumentam disponibilidade de uma app em EC2:",
    "alternativas": ["Auto Scaling", "ACLs", "Distribuição entre AZs", "Migrar com AWS SMS", "Distribuição por Edge"],
    "resposta": 0,
    "explicacao": "Distribuição entre zonas de disponibilidade e Auto Scaling aumentam tolerância a falhas."
},
{
    "pergunta": "Como fazer avaliação de segurança aprovada pela AWS?",
    "alternativas": ["Flood de requisições", "Amazon Inspector", "Pentest", "AWS Service Health Dashboard"],
    "resposta": 1,
    "explicacao": "Amazon Inspector é um serviço automatizado de segurança para encontrar vulnerabilidades."
},
{
    "pergunta": "Afirmações sobre custo-benefício na AWS:",
    "alternativas": ["Trocar fixos por variáveis", "Implantar globalmente", "Agilidade", "Patching automático", "Economia de escala"],
    "resposta": 4,
    "explicacao": "Na nuvem paga-se conforme uso e obtém-se economias de escala da infraestrutura global da AWS."
},
{
    "pergunta": "Qual recurso permite pagar conforme uso atual?",
    "alternativas": ["AWS Budgets", "Pay-as-you-go", "Descontos por volume", "Savings Plans"],
    "resposta": 1,
    "explicacao": "O modelo pay-as-you-go permite pagar apenas pelo uso real dos recursos."
},
{
    "pergunta": "Serviço que integra dados de múltiplas fontes sem código adicional:",
    "alternativas": ["AWS Lambda", "Amazon SQS", "CloudWatch", "EventBridge"],
    "resposta": 3,
    "explicacao": "Amazon EventBridge conecta eventos entre serviços da AWS e aplicativos sem necessidade de código."
},
{
    "pergunta": "O que é uma Availability Zone?",
    "alternativas": [
        "Local sem Região AWS",
        "Datacenters com energia e rede redundantes",
        "Clusters para novos workloads",
        "Rede CDN"
    ],
    "resposta": 1,
    "explicacao": "Uma AZ é uma ou mais instalações físicas isoladas dentro de uma região AWS."
},
{
    "pergunta": "Onde encontrar documentos de conformidade da AWS?",
    "alternativas": ["Trusted Advisor", "AWS Artifact", "Well-Architected Tool", "Systems Manager"],
    "resposta": 1,
    "explicacao": "O AWS Artifact fornece acesso a documentos de conformidade e relatórios de auditoria."
},
{
    "pergunta": "Responsabilidade do cliente segundo o modelo compartilhado da AWS:",
    "alternativas": [
        "Conectividade com internet",
        "Patching da infraestrutura",
        "Segurança física",
        "Backup de volumes EBS"
    ],
    "resposta": 3,
    "explicacao": "O cliente é responsável por configurar backups e gerenciar os dados na nuvem."
},
{
    "pergunta": "Serviço que registra chamadas de API na AWS:",
    "alternativas": ["CloudWatch", "CloudTrail", "AWS Config", "AWS Artifact"],
    "resposta": 1,
    "explicacao": "CloudTrail registra chamadas de API, útil para auditoria e rastreamento de ações."
},
{
    "pergunta": "Recurso que estima custos antes da implantação:",
    "alternativas": ["AWS Free Tier", "AWS Pricing Calculator", "Billing and Cost Management", "Cost and Usage Report"],
    "resposta": 1,
    "explicacao": "O AWS Pricing Calculator permite prever e estimar custos com base nos serviços desejados."
},
{
    "pergunta": "Como descobrir a última vez que um usuário acessou o Console da AWS?",
    "alternativas": ["Amazon Cognito", "AWS CloudTrail", "Amazon Inspector", "Amazon GuardDuty"],
    "resposta": 1,
    "explicacao": "O CloudTrail mantém logs de acesso ao Console e outras atividades da conta AWS."
},
{
    "pergunta": "Qual princípio de design é recomendado ao arquitetar na nuvem AWS?",
    "alternativas": [
        "Servidores não descartáveis",
        "Integração síncrona",
        "Componentes fracamente acoplados",
        "Regras menos permissivas"
    ],
    "resposta": 2,
    "explicacao": "Componentes fracamente acoplados reduzem o impacto de falhas e aumentam a escalabilidade."
},
{
    "pergunta": "Empresa quer firewall para controlar tráfego entre sub-redes em uma VPC. Qual recurso usar?",
    "alternativas": ["Tabelas de roteamento", "ACLs de rede", "Grupos de segurança", "Amazon GuardDuty"],
    "resposta": 2,
    "explicacao": "Grupos de segurança permitem controlar o tráfego de entrada e saída entre instâncias."
},
{
    "pergunta": "Quais são vantagens de migrar para a nuvem AWS?",
    "alternativas": [
        "Transferência total da segurança à AWS",
        "Modelo pay-as-you-go",
        "Controle total sobre infraestrutura física",
        "Sem necessidade de prever capacidade",
        "Sem preocupação com controle de acesso"
    ],
    "resposta": 1,
    "explicacao": "Com o modelo pay-as-you-go e a escalabilidade automática, não é necessário prever demanda antecipadamente."
},
{
    "pergunta": "Qual serviço rastreia e audita mudanças de configuração em recursos AWS?",
    "alternativas": ["AWS Shield", "AWS Config", "AWS IAM", "Amazon Inspector"],
    "resposta": 1,
    "explicacao": "AWS Config registra e avalia configurações de recursos, permitindo auditoria e conformidade."
},
{
    "pergunta": "Administradores precisam agrupar usuários e aplicar permissões. Qual serviço usar?",
    "alternativas": ["AWS Organizations", "Grupos de recursos", "Tags de recursos", "AWS IAM"],
    "resposta": 3,
    "explicacao": "O AWS IAM permite criar grupos e aplicar políticas de segurança a usuários e recursos."
},
{
    "pergunta": "Qual serviço recomenda dimensionamento correto de instâncias EC2 baseado no uso histórico?",
    "alternativas": ["Pricing Calculator", "AWS Compute Optimizer", "AWS App Runner", "Systems Manager"],
    "resposta": 1,
    "explicacao": "O AWS Compute Optimizer analisa dados históricos para sugerir instâncias EC2 mais eficientes."
},
{
    "pergunta": "Qual tarefa exige uso de credenciais do usuário root da conta AWS?",
    "alternativas": ["Excluir usuários IAM", "Mudar plano de suporte", "Criar organização no AWS Organizations", "Excluir instâncias EC2"],
    "resposta": 2,
    "explicacao": "A criação de uma nova organização na AWS requer credenciais do usuário root por segurança."
},
{
    "pergunta": "Quais tarefas são responsabilidade da AWS segundo o modelo de responsabilidade compartilhada?",
    "alternativas": [
        "Patching de dispositivos de rede",
        "Definir regras de senha",
        "Segurança física de recursos computacionais",
        "Configuração de grupos de segurança",
        "Patching do SO de EC2"
    ],
    "resposta": 0,
    "explicacao": "A AWS é responsável pela segurança da infraestrutura, incluindo rede, energia e datacenters físicos."
}
]

TEMPLATE = """
<!doctype html>
<title>Simulado AWS CLF-C02</title>
<h1>{{ titulo }}</h1>
{% if pergunta is not none %}
    <form method="POST">
        <p><strong>Pergunta {{ idx + 1 }}:</strong> {{ pergunta['pergunta'] }}</p>
        {% for i, alt in enumerate(alternativas) %}
            <label><input type="radio" name="resposta" value="{{ i }}" required> {{ alt }}</label><br>
        {% endfor %}
        <br>
        <input type="submit" value="Responder">
    </form>
    {% if mostrar_feedback %}
        <p><strong>{{ feedback }}</strong></p>
        <p>{{ explicacao }}</p>
        <a href="{{ url_for('simulado') }}">Próxima pergunta</a>
    {% endif %}
{% else %}
    <p>Simulado concluído!</p>
    <p>Você acertou {{ acertos }} de {{ total }} ({{ percentual }}%).</p>
    <p>{% if percentual >= 70 %}<strong>Parabéns, você foi aprovado!</strong>{% else %}<strong>Você não atingiu os 70%, continue estudando!</strong>{% endif %}</p>
    <a href="{{ url_for('inicio') }}">Reiniciar</a>
{% endif %}
"""

@app.route('/')
def inicio():
    modo = request.args.get('modo', 'completo')
    perguntas_embaralhadas = random.sample(perguntas, len(perguntas))
    for pergunta in perguntas_embaralhadas:
        alternativas = list(enumerate(pergunta['alternativas']))
        random.shuffle(alternativas)
        pergunta['alternativas_embaralhadas'] = [alt for _, alt in alternativas]
        pergunta['resposta_embaralhada'] = [alt for _, alt in alternativas].index(pergunta['alternativas'][pergunta['resposta']])
    session['modo'] = modo
    session['perguntas'] = perguntas_embaralhadas
    session['indice'] = 0
    session['acertos'] = 0
    return redirect(url_for('simulado'))

@app.route('/simulado', methods=['GET', 'POST'])
def simulado():
    idx = session.get('indice', 0)
    modo = session.get('modo', 'completo')
    perguntas_embaralhadas = session.get('perguntas', [])

    if idx >= len(perguntas_embaralhadas):
        acertos = session.get('acertos', 0)
        total = len(perguntas_embaralhadas)
        percentual = round((acertos / total) * 100, 2)
        return render_template_string(TEMPLATE, titulo="Resultado Final", pergunta=None,
                                      acertos=acertos, total=total, percentual=percentual)

    pergunta = perguntas_embaralhadas[idx]
    alternativas_embaralhadas = pergunta['alternativas_embaralhadas']
    resposta_correta = pergunta['resposta_embaralhada']
    mostrar_feedback = False
    feedback = ''
    explicacao = ''

    if request.method == 'POST':
        resposta = int(request.form['resposta'])
        if resposta == resposta_correta:
            session['acertos'] += 1
            feedback = 'Resposta correta!'
        else:
            feedback = f"Incorreto. A resposta correta era: {resposta_correta + 1} - {alternativas_embaralhadas[resposta_correta]}"
        explicacao = pergunta['explicacao']
        session['indice'] = idx + 1

        if modo == 'passoapasso':
            return render_template_string(TEMPLATE, titulo="Simulado AWS - Passo a Passo",
                                          pergunta=pergunta, idx=idx, mostrar_feedback=True,
                                          feedback=feedback, explicacao=explicacao,
                                          alternativas=alternativas_embaralhadas)
        else:
            return redirect(url_for('simulado'))

    return render_template_string(TEMPLATE, titulo="Simulado AWS CLF-C02", pergunta=pergunta,
                                  idx=idx, mostrar_feedback=False,
                                  alternativas=alternativas_embaralhadas)

if __name__ == '__main__':
    app.run(debug=True)

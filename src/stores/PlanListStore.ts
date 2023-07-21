import { defineStore } from "pinia";
import { reactive } from "vue";


export const usePlanListStore = defineStore('planList', () => {
    const header = reactive({
        title: 'hospedar seu site',
        desc: 'Você está muito próximo de mudar a forma de',
        choosePlan: 'Escolha seu plano'
    })

    const planList = reactive([
        {
            title: 'Hospedagem 1',
            tip: 0,
            desc: 'Você não paga nada para usar sem taxa de setup',
            desc2: 'Ideal para quem está começando',
            titleServers: 'Seu site no servidor no Estados Unidos',
            servers: [
                'Servidores em nossos data center americanos',
                'Asp, Asp.NET',
                '1 usúario de FTP para upload ou donwload',
                '1 contas de e-mails profissionais',
                '1 subdomínio gratuito'
            ],
            titleApp: 'Aplicativos disponíveis',
            appAvaliable: [
                'Wordpress', 
                'Drupal', 
                'Entre outros...'
            ],
            titleMore: 'Você ainda tem',
            more: [
                'Webmail RoundCube', 
                'AntiSpam', 
                'Painel de gerenciamente de DNS',
                'Configuração de PHP',
                'Certificado SSL Grátis',
                'Transferência ilimitada'
            ],
            suport: 'Suport 24 horas. 7 dias por semana grátis;',
            moreUse: false
        },
        {
            title: 'Hospedagem 2',
            tip: 499,
            desc: 'cobrado mensalmente em taxa de setup',
            desc2: 'Ideal para site com mais de 30k de visitas',
            titleServers: 'Seu site em servidores no Brasil',
            servers: [
                'Servidores em São Paulo',
                'Asp, Asp.NET',
                '10 usúario de FTP para upload ou donwload',
                '30 contas de e-mails profissionais',
                '10 subdomínio gratuito'
            ],
            titleApp: 'Aplicativos disponíveis',
            appAvaliable: [
                'Wordpress', 
                'Drupal', 
                'Entre outros...'
            ],
            migrationTitle: 'Migração Gratuita',
            migration: ['Migramos todos seus sites para nossos servidores'], 
            titleMore: 'Você ainda tem',
            more: [
                'Webmail RoundCube', 
                'AntiSpam', 
                'Painel de gerenciamente de DNS',
                'Configuração de PHP',
                'Certificado SSL Grátis',
                'Transferência ilimitada'
            ],
            suport: 'Suport 24 horas. 7 dias por semana grátis;',
            moreUse: true
        },
        {
            title: 'Hospedagem 3',
            tip: 999,
            desc: 'cobrado mensalmente em taxa de setup',
            desc2: 'Ideal para site com mais de 60k de visitas',
            titleServers: 'Seu site em servidores no Brasil',
            servers: [
                'Servidores em São Paulo',
                'Asp, Asp.NET',
                'Ilimitados usúario de FTP para upload ou donwload',
                'Ilimitados contas de e-mails profissionais',
                '50 subdomínio gratuito'
            ],
            titleApp: 'Aplicativos disponíveis',
            appAvaliable: [
                'Wordpress', 
                'Drupal', 
                'Entre outros...'
            ],
            migrationTitle: 'Migração Gratuita',
            migration: ['Migramos todos seus sites para nossos servidores'], 
            titleMore: 'Você ainda tem',
            more: [
                'Webmail RoundCube', 
                'AntiSpam', 
                'Painel de gerenciamente de DNS',
                'Configuração de PHP',
                'Certificado SSL Grátis',
                'Transferência ilimitada'
            ],
            suport: 'Suport 24 horas. 7 dias por semana grátis;',
            moreUse: false
        },
        
    ])

    return {
        header,
        planList
    }
})
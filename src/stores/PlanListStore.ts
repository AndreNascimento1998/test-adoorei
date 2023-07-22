import { defineStore } from "pinia";
import { reactive } from "vue";


export const usePlanListStore = defineStore('planList', () => {
 
    const planList = reactive([
        {
            id: 1,
            title: 'Hospedagem 1',
            tip: 0,
            desc: 'Você não paga nada para usar <br/> sem taxa de setup',
            desc2: 'Ideal para quem está <br/> começando.',
            suport: 'Suporte 24 horas. 7 dias por semana grátis;',
            moreUse: false,
            

            titleServers: 'Seu site no servidor no Estados Unidos',
            servers: [
                'Servidores em nossos data center americanos',
                'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2(medium trust) ou PHP 5.3, 5.4, 5.5, 5.6, 7.0;',
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
        },
        {
            id: 2,
            title: 'Hospedagem 2',
            tip: 499,
            desc: 'Cobrado mensalmente <br/> em taxa de setup',
            desc2: 'Ideal para sites com mais <br/> de 30k de visitas',
            titleServers: 'Seu site em servidores no Brasil',
            suport: 'Suport 24 horas. 7 dias por semana grátis;',
            moreUse: true,

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
        },
        {
            id: 3,
            title: 'Hospedagem 3',
            tip: 999,
            desc: 'Cobrado mensalmente <br/> em taxa de setup',
            desc2: 'Ideal para sites com mais <br/> de 60k de visitas',
            suport: 'Suport 24 horas. 7 dias por semana grátis;',
            moreUse: false,

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
        },
        
    ])

    return {
        planList
    }
})
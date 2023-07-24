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
      
          titleServers: 'Seu site no servidor <u> nos Estados Unidos. </u>',
          servers: [
            'Servidores em nossos data centers americanos;',
            'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6, 7.0;',
            '1 usuário de FTP para upload ou download;',
            '1 conta de e-mails profissionais;',
            '1 subdomínio gratuito;'
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
            'Painel de gerenciamento de DNS',
            'Painel de controle Web',
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
          titleServers: 'Seu site em servidores <u> no Brasil. </u>',
          suport: 'Suporte 24 horas. 7 dias por semana grátis;',
          moreUse: true,
      
          servers: [
            'Servidores em São Paulo;',
            'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6, 7.0;',
            '10 usuários de FTP para upload ou download;',
            '30 contas de e-mails profissionais;',
            '10 subdomínios gratuitos;'
          ],
      
          titleApp: 'Aplicativos disponíveis',
          appAvaliable: [
            'Wordpress', 
            'Drupal', 
            'Entre outros...'
          ],
                  
          migrationTitle: 'Migração Gratuita',
          migration: ['Migramos todos os seus sites para nossos servidores'], 
      
          titleMore: 'Você ainda tem',
          more: [
            'Webmail RoundCube', 
            'AntiSpam', 
            'Painel de gerenciamento de DNS',
            'Painel de controle Web',
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
          suport: 'Suporte 24 horas. 7 dias por semana grátis;',
          moreUse: false,
      
          titleServers: 'Seu site em servidores <u> no Brasil. </u>',
          servers: [
            'Servidores em São Paulo;',
            'ASP, ASP.NET 2.0/3.0/3.5 e 4.0/4.5/4.5.1/4.5.2 (medium trust) ou PHP 5.3, 5.4, 5.5, 5.6, 7.0;',
            'Ilimitados usuários de FTP para upload ou download;',
            'Ilimitados contas de e-mails profissionais;',
            '50 subdomínios gratuitos;'
          ],
      
          titleApp: 'Aplicativos disponíveis',
          appAvaliable: [
            'Wordpress', 
            'Drupal', 
            'Entre outros...'
          ],
      
          migrationTitle: 'Migração Gratuita',
          migration: ['Migramos todos os seus sites para nossos servidores'], 
      
          titleMore: 'Você ainda tem',
          more: [
            'Webmail RoundCube', 
            'AntiSpam', 
            'Painel de gerenciamento de DNS',
            'Painel de controle Web',
            'Configuração de PHP',
            'Certificado SSL Grátis',
            'Transferência ilimitada'
          ],
        },
      ]);
      
    return {
        planList
    }
})
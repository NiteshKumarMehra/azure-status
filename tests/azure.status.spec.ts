import { test, expect } from '@playwright/test'

test.describe.configure({ mode: 'parallel' });

test("Azure status test - Lot 1", async ({ page }) => {
 // Go to the Azure Status site
 await page.goto("https://status.azure.com/en-us/status")
 
 //Page verification
 const pageTitle = await page.locator('h1')
 await expect(pageTitle).toContainText('Azure status')

 await page.locator('[aria-label="Refresh every"]').selectOption('600000');

 // Pick region as West Europe in Europe
 await page.locator('a[role="tab"]:has-text("Europe")').click();

 //Section A - COMPUTE
 // A-1 => Azure VMware Solution by CloudSimple 
 const AzVM_CloudSimple = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(2) .status-cell .icon')
 await expect(AzVM_CloudSimple).toBeVisible()
 await expect(AzVM_CloudSimple).toHaveAttribute('data-label', 'Good')

 // A-2 => Virtual Machines 
 const VMs =  await page.locator('.status-table.region-status-table.active tbody tr:nth-child(3) td:nth-child(4) .icon');
 await expect(VMs).toBeVisible()
 await expect(VMs).toHaveAttribute('data-label', 'Good')

 // A-3 => SAP HANA on Azure Large Instances 
 const SAP_HANA = await page.locator("(//span[@data-label='Good'])[1440]");
 await expect(SAP_HANA).toBeVisible()
 await expect(SAP_HANA).toHaveAttribute('data-label', 'Good')
 
 // A-4 => BareMetal Infrastructure
 const bMetalInfra = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(5) td:nth-child(4) .icon');
 await expect(bMetalInfra).toBeVisible()
 await expect(bMetalInfra).toHaveAttribute('data-label', 'Good')

 // A-5 => SQL Server on Azure Virtual Machines
 const SQLAVM = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(6) td:nth-child(4) .icon');
 await expect(SQLAVM).toBeVisible()
 await expect(SQLAVM).toHaveAttribute('data-label', 'Good')

 // A-6 => Azure Dedicated Host
 const ADedHost= await page.locator('.status-table.region-status-table.active tbody tr:nth-child(7) td:nth-child(4) .icon');
 await expect(ADedHost).toBeVisible();
 await expect(ADedHost).toHaveAttribute('data-label', 'Good');

 // A-7 => Virtual Machine Scale Sets
 const VMSS = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(9) td:nth-child(4) .icon');
 await expect(VMSS).toBeVisible();
 await expect(VMSS).toHaveAttribute('data-label', 'Good');

 // A-8 => Azure Functions
 const AZFs = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(10) td:nth-child(4) .icon');
 await expect(AZFs).toBeVisible();
 await expect(AZFs).toHaveAttribute('data-label', 'Good');

 // A-9 => Azure Service Fabric
 const AServFab = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(11) td:nth-child(4) .icon');
 await expect(AServFab).toBeVisible();
 await expect(AServFab).toHaveAttribute('data-label', 'Good');

 // A-10 => Batch
 const batch = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(12) td:nth-child(4) .icon');
 await expect(batch).toBeVisible();
 await expect(batch).toHaveAttribute('data-label', 'Good');

 // A-11 => Cloud Services
 const cloudServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(13) td:nth-child(4) .icon');
 await expect(cloudServ).toBeVisible();
 await expect(cloudServ).toHaveAttribute('data-label', 'Good');

 // A-12 => Azure Spring Cloud
 const AzSprCld = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(14) td:nth-child(4) .icon');
 await expect(AzSprCld).toBeVisible();
 await expect(AzSprCld).toHaveAttribute('data-label', 'Good');

 // A-13 => Azure Quantum
 const AzQt = await page.locator('tr:nth-child(15) td:nth-child(4) .icon');
 await expect(AzQt).toBeVisible();
 await expect(AzQt).toHaveAttribute('data-label', 'Good');

 // A-14 => Azure VMware Solution
 const AzVMSol = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(16) td:nth-child(4) .icon');
 await expect(AzVMSol).toBeVisible();
 await expect(AzVMSol).toHaveAttribute('data-label', 'Good');

 //Section B - DEVELOPER TOOLS
 // B-1 => Azure Lab Services
 const AzLabServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(19) td:nth-child(4) .icon');
 await expect(AzLabServ).toBeVisible();
 await expect(AzLabServ).toHaveAttribute('data-label', 'Good');

 // B-2 => App Configuration
 const appConfig = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(20) td:nth-child(4) .icon');
 await expect(appConfig).toBeVisible();
 await expect(appConfig).toHaveAttribute('data-label', 'Good');

 //Section C - NETWORKING
 // C-1 => Virtual Network
 const virtNwk = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(22) td:nth-child(4) .icon');
 await expect(virtNwk).toBeVisible();
 await expect(virtNwk).toHaveAttribute('data-label', 'Good');

 // C-2 => Load Balancer
 const ldBal = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(23) td:nth-child(4) .icon');
 await expect(ldBal).toBeVisible();
 await expect(ldBal).toHaveAttribute('data-label', 'Good');

 // C-3 => Application Gateway
 const appGate = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(24) td:nth-child(4) .icon');
 await expect(appGate).toBeVisible();
 await expect(appGate).toHaveAttribute('data-label', 'Good');

 // C-4 => VPN Gateway
 const VPNGate = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(25) td:nth-child(4) .icon');
 await expect(VPNGate).toBeVisible();
 await expect(VPNGate).toHaveAttribute('data-label', 'Good');

 // C-5 => Network Watcher
 const netWatcher = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(29) td:nth-child(4) .icon');
 await expect(netWatcher).toBeVisible();
 await expect(netWatcher).toHaveAttribute('data-label', 'Good');

 // C-6 => Network Infrastructure
 const netInfra = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(30) td:nth-child(4) .icon');
 await expect(netInfra).toBeVisible();
 await expect(netInfra).toHaveAttribute('data-label', 'Good');

 // C-7 => Azure ExpressRoute
 const AzExpRt = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(31) td:nth-child(4) .icon');
 await expect(AzExpRt).toBeVisible();
 await expect(AzExpRt).toHaveAttribute('data-label', 'Good');

 // C-8 => ExpressRoute Circuits
 const expRtCrt = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(32) td:nth-child(4) .icon');
 await expect(expRtCrt).toBeVisible();
 await expect(expRtCrt).toHaveAttribute('data-label', 'Good');

 // C-9 => ExpressRoute Gateways
 const expRtGate = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(33) td:nth-child(4) .icon');
 await expect(expRtGate).toBeVisible();
 await expect(expRtGate).toHaveAttribute('data-label', 'Good');

 // C-10 => Azure Firewall
 const AzFirewall = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(34) td:nth-child(4) .icon');
 await expect(AzFirewall).toBeVisible();
 await expect(AzFirewall).toHaveAttribute('data-label', 'Good');

 // C-11 => Virtual WAN
 const vrtWAN = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(36) td:nth-child(4) .icon');
 await expect(vrtWAN).toBeVisible();
 await expect(vrtWAN).toHaveAttribute('data-label', 'Good');

 // C-12 => Azure Bastion
 const AzBastion = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(37) td:nth-child(4) .icon');
 await expect(AzBastion).toBeVisible();
 await expect(AzBastion).toHaveAttribute('data-label', 'Good');

 // C-13 => Azure Private Link
 const AzPvtLk = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(38) td:nth-child(4) .icon');
 await expect(AzPvtLk).toBeVisible();
 await expect(AzPvtLk).toHaveAttribute('data-label', 'Good');

 // C-14 => Azure Firewall Manager
 const AzFrwMgr = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(39) td:nth-child(4) .icon');
 await expect(AzFrwMgr).toBeVisible();
 await expect(AzFrwMgr).toHaveAttribute('data-label', 'Good');

 // C-15 => Web Application Firewall
 const webAppFirewall = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(41) td:nth-child(4) .icon');
 await expect(webAppFirewall).toBeVisible();
 await expect(webAppFirewall).toHaveAttribute('data-label', 'Good');

 //Section D - STORAGE
 // D-1 => Storage Accounts
 const strgAcc = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(45) td:nth-child(4) .icon');
 await expect(strgAcc).toBeVisible();
 await expect(strgAcc).toHaveAttribute('data-label', 'Good');

 // D-2 => Azure NetApp Files
 const AzNetApp = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(46) td:nth-child(4) .icon');
 await expect(AzNetApp).toBeVisible();
 await expect(AzNetApp).toHaveAttribute('data-label', 'Good');

 // D-3 => StorSimple
 const storeSimp = await page.locator("(//span[@data-label='Good'])[1778]");
 await expect(storeSimp).toBeVisible();
 await expect(storeSimp).toHaveAttribute('data-label', 'Good');

 // D-4 => Azure HPC Cache
 const AzHPC = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(48) td:nth-child(4) .icon');
 await expect(AzHPC).toBeVisible();
 await expect(AzHPC).toHaveAttribute('data-label', 'Good');

 //Section E - WEB
 // E-1 => App Service
 const appServ =  await page.locator('.status-table.region-status-table.active tbody tr:nth-child(50) td:nth-child(4) .icon');
 await expect(appServ).toBeVisible();
 await expect(appServ).toHaveAttribute('data-label', 'Good');

 // E-2 => Web Apps
 const webApp = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(51) td:nth-child(4) .icon');
 await expect(webApp).toBeVisible();
 await expect(webApp).toHaveAttribute('data-label', 'Good');

 // E-3 => App Service(Linux)
 const appServLinux = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(53) td:nth-child(4) .icon');
 await expect(appServLinux).toBeVisible();
 await expect(appServLinux).toHaveAttribute('data-label', 'Good');

 // E-4 => Web App Linux
 const webAppLin = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(54) td:nth-child(4) .icon');
 await expect(webAppLin).toBeVisible();
 await expect(webAppLin).toHaveAttribute('data-label', 'Good');

 // E-5 => Web App for Containers
 const webAppCont = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(55) td:nth-child(4) .icon');
 await expect(webAppCont).toBeVisible();
 await expect(webAppCont).toHaveAttribute('data-label', 'Good');

 // E-6 => API Management
 const APIMgmt = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(56) td:nth-child(4) .icon');
 await expect(APIMgmt).toBeVisible();
 await expect(APIMgmt).toHaveAttribute('data-label', 'Good');

 // E-7 => Azure Cognitive Search
 const AzCogSearch = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(57) td:nth-child(4) .icon');
 await expect(AzCogSearch).toBeVisible();
 await expect(AzCogSearch).toHaveAttribute('data-label', 'Good');

 // E-8 => Azure SignalR Service
 const AzSignalR = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(58) td:nth-child(4) .icon');
 await expect(AzSignalR).toBeVisible();
 await expect(AzSignalR).toHaveAttribute('data-label', 'Good');

 // E-9 => Azure Web PubSub
 const AzWebPubSub = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(60) td:nth-child(4) .icon');
 await expect(AzWebPubSub).toBeVisible();
 await expect(AzWebPubSub).toHaveAttribute('data-label', 'Good');

 // E-10 => Azure Fluid Relay
 const AzFluid = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(61) .status-cell .icon');
 await expect(AzFluid).toBeVisible();
 await expect(AzFluid).toHaveAttribute('data-label', 'Good');

 //Section F - MOBILE
 // F-1 => Notification Hub
 const notHub = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(63) td:nth-child(4) .icon');
 await expect(notHub).toBeVisible();
 await expect(notHub).toHaveAttribute('data-label', 'Good');

 //Section G - CONTAINERS
 // G-1 => Azure Container Service
 const AzContServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(65) td:nth-child(4) .icon');
 await expect(AzContServ).toBeVisible();
 await expect(AzContServ).toHaveAttribute('data-label', 'Good');
  
 // G-2 => Azure Container Instances
 const AzContInst = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(66) td:nth-child(4) .icon');
 await expect(AzContInst).toBeVisible();
 await expect(AzContInst).toHaveAttribute('data-label', 'Good');

 // G-3 => Azure Container Registry 
 const AzContReg = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(67) td:nth-child(4) .icon');
 await expect(AzContReg).toBeVisible();
 await expect(AzContReg).toHaveAttribute('data-label', 'Good');

 // G-4 => Azure Kubernetes Service (AKS)
 const AzKubServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(68) td:nth-child(4) .icon');
 await expect(AzKubServ).toBeVisible();
 await expect(AzKubServ).toHaveAttribute('data-label', 'Good');

 // G-5 => Azure Dev Spaces
 const AzDevSpc = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(69) td:nth-child(4) .icon');
 await expect(AzDevSpc).toBeVisible();
 await expect(AzDevSpc).toHaveAttribute('data-label', 'Good');

 // G-6 => Azure Red Hat OpenShift
 const AzRedHat = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(70) td:nth-child(4) .icon');
 await expect(AzRedHat).toBeVisible();
 await expect(AzRedHat).toHaveAttribute('data-label', 'Good');

 // G-7 => Azure Container Apps
 const AzContApp = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(71) .status-cell .icon');
 await expect(AzContApp).toBeVisible();
 await expect(AzContApp).toHaveAttribute('data-label', 'Good');

 //Section H - DATABASES
 // H-1 => Azure Cosmos DB
 const AzCosDB = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(73) td:nth-child(4) .icon');
 await expect(AzCosDB).toBeVisible();
 await expect(AzCosDB).toHaveAttribute('data-label', 'Good');

 // H-2 => Azure SQL Database 
 const AzSQLDB = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(74) td:nth-child(4) .icon');
 await expect(AzSQLDB).toBeVisible();
 await expect(AzSQLDB).toHaveAttribute('data-label', 'Good');

 // H-3 => Azure Database for MySQL
 const AzDBMySQL = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(75) td:nth-child(4) .icon');
 await expect(AzDBMySQL).toBeVisible();
 await expect(AzDBMySQL).toHaveAttribute('data-label', 'Good');

 // H-4 => Azure Database for MySQL flexible servers
 const AzDBnFlexServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(76) td:nth-child(4) .icon');
 await expect(AzDBnFlexServ).toBeVisible();
 await expect(AzDBnFlexServ).toHaveAttribute('data-label', 'Good');

 // H-5 => Azure Database for MariaDB
 const AzMariaDB = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(77) td:nth-child(4) .icon');
 await expect(AzMariaDB).toBeVisible();
 await expect(AzMariaDB).toHaveAttribute('data-label', 'Good');

 // H-6 => Azure Database for PostgreSQL
 const AzPostSQL = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(78) td:nth-child(4) .icon');
 await expect(AzPostSQL).toBeVisible();
 await expect(AzPostSQL).toHaveAttribute('data-label', 'Good');

 // H-7 => Azure Database for PostgreSQL flexible servers
 const AzPostSQLFlexServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(79) td:nth-child(4) .icon');
 await expect(AzPostSQLFlexServ).toBeVisible();
 await expect(AzPostSQLFlexServ).toHaveAttribute('data-label', 'Good');

 // H-8 => Azure Cache for Redis
 const AzRedis = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(80) td:nth-child(4) .icon');
 await expect(AzRedis).toBeVisible();
 await expect(AzRedis).toHaveAttribute('data-label', 'Good');

 // H-9 => SQL Server Stretch Database
 const SQLStrDB = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(81) td:nth-child(4) .icon');
 await expect(SQLStrDB).toBeVisible();
 await expect(SQLStrDB).toHaveAttribute('data-label', 'Good');

 // H-10 => Azure Managed Instance for Apache Cassandra
 const AzCasandra = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(82) td:nth-child(4) .icon');
 await expect(AzCasandra).toBeVisible();
 await expect(AzCasandra).toHaveAttribute('data-label', 'Good');
})

test("Azure status test - Lot 2", async ({ page }) => {
 // Go to the Azure Status site
 await page.goto("https://status.azure.com/en-us/status")
 
 //Page verification
 const pageTitle = await page.locator('h1')
 await expect(pageTitle).toContainText('Azure status')

 await page.locator('[aria-label="Refresh every"]').selectOption('600000');


 //Section I - ANALYTICS
 // I-1 => Azure Synapse Analytics
 const AzAnalytics = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(84) td:nth-child(4) .icon');
 await expect(AzAnalytics).toBeVisible();
 await expect(AzAnalytics).toHaveAttribute('data-label', 'Good');

 // I-2 => HDInsight
 const HDInsight = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(85) td:nth-child(4) .icon');
 await expect(HDInsight).toBeVisible();
 await expect(HDInsight).toHaveAttribute('data-label', 'Good');

 // I-3 => Azure Data Factory
 const AzDataFact =  await page.locator('.status-table.region-status-table.active tbody tr:nth-child(86) td:nth-child(4) .icon');
 await expect(AzDataFact).toBeVisible();
 await expect(AzDataFact).toHaveAttribute('data-label', 'Good');
 
 // I-4 => Azure Integration Runtime
 const AzIntRun = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(88) td:nth-child(4) .icon');
 await expect(AzIntRun).toBeVisible();
 await expect(AzIntRun).toHaveAttribute('data-label', 'Good');

 // I-5 => SSIS Integration Runtime
 const SSIS = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(89) td:nth-child(4) .icon');
 await expect(SSIS).toBeVisible();
 await expect(SSIS).toHaveAttribute('data-label', 'Good');

 // I-6 => Azure Stream Analytics
 const AzStrAnalytics = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(90) td:nth-child(4) .icon');
 await expect(AzStrAnalytics).toBeVisible();
 await expect(AzStrAnalytics).toHaveAttribute('data-label', 'Good');

 // I-7 => Data Lake Analytics
 const dataLake = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(91) td:nth-child(4) .icon');
 await expect(dataLake).toBeVisible();
 await expect(dataLake).toHaveAttribute('data-label', 'Good');

 // I-8 => Event Hubs
 const evtHub = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(92) td:nth-child(4) .icon');
 await expect(evtHub).toBeVisible();
 await expect(evtHub).toHaveAttribute('data-label', 'Good');

 // I-9 => Azure Analysis Services
 const AzAnaServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(94) td:nth-child(4) .icon');
 await expect(AzAnaServ).toBeVisible();
 await expect(AzAnaServ).toHaveAttribute('data-label', 'Good');

 await page.waitForTimeout(3000)

 // I-10 => Data Catalog
 const dataCat = await page.locator("(//span[@data-label='Good'])[2124]");
 await expect(dataCat).toBeVisible();
 await expect(dataCat).toHaveAttribute('data-label', 'Good');

 // I-11 => Azure Data Lake Storage Gen1
 const AzDataStorage = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(96) td:nth-child(4) .icon');
 await expect(AzDataStorage).toBeVisible();
 await expect(AzDataStorage).toHaveAttribute('data-label', 'Good');

 // I-12 => Azure Databricks
 const AzDtaBricks = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(97) td:nth-child(4) .icon');
 await expect(AzDtaBricks).toBeVisible();
 await expect(AzDtaBricks).toHaveAttribute('data-label', 'Good');

 await page.waitForTimeout(2000);

 // I-13 => Azure Data Explorer
 const AzDtaExp = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(98) td:nth-child(4) .icon');
 await expect(AzDtaExp).toBeVisible();
 await expect(AzDtaExp).toHaveAttribute('data-label', 'Good');

 // I-14 => Azure Data Share
 const AzDtaShare = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(99) td:nth-child(4) .icon');
 await expect(AzDtaShare).toBeVisible();
 await expect(AzDtaShare).toHaveAttribute('data-label', 'Good');

 // I-15 => Azure Purview
 const AzPurview = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(100) td:nth-child(4) .icon');
 await expect(AzPurview).toBeVisible();
 await expect(AzPurview).toHaveAttribute('data-label', 'Good');

 await page.waitForTimeout(2000);

 //Section J - AI + MACHINE LEARNING
 // J-1 => Health Bot
 const healthBot = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(103) td:nth-child(4) .icon');
 await expect(healthBot).toBeVisible();
 await expect(healthBot).toHaveAttribute('data-label', 'Good');

 // J-2 => Azure Machine Learning
 const AzMacLearn = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(104) td:nth-child(4) .icon');
 await expect(AzMacLearn).toBeVisible();
 await expect(AzMacLearn).toHaveAttribute('data-label', 'Good');

 // J-3 => Machine Learning Studio (classic)
 const machLaerStd = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(105) .status-cell .icon');
 await expect(machLaerStd).toBeVisible();
 await expect(machLaerStd).toHaveAttribute('data-label', 'Good');

 // J-4 => Azure Cognitive Services
 const AzCogServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(106) td:nth-child(4) .icon');
 await expect(AzCogServ).toBeVisible();
 await expect(AzCogServ).toHaveAttribute('data-label', 'Good');

 // J-5 => Anomaly Detector
 const anaDect = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(107) td:nth-child(4) .icon');
 await expect(anaDect).toBeVisible();
 await expect(anaDect).toHaveAttribute('data-label', 'Good');

 // J-6 => Computer Vision
 const compVision = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(109) td:nth-child(4) .icon');
 await expect(compVision).toBeVisible();
 await expect(compVision).toHaveAttribute('data-label', 'Good');

 // J-7 => Content Moderator
 const contMode = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(110) td:nth-child(4) .icon');
 await expect(contMode).toBeVisible();
 await expect(contMode).toHaveAttribute('data-label', 'Good');

 // J-8 => Custom Vision
 const custVision = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(111) td:nth-child(4) .icon');
 await expect(custVision).toBeVisible();
 await expect(custVision).toHaveAttribute('data-label', 'Good');

 // J-9 => Face API
 const faceAPI = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(112) td:nth-child(4) .icon');
 await expect(faceAPI).toBeVisible();
 await expect(faceAPI).toHaveAttribute('data-label', 'Good');

 // J-10 => Language Understanding (LUIS)
 const langUnd = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(113) td:nth-child(4) .icon');
 await expect(langUnd).toBeVisible();
 await expect(langUnd).toHaveAttribute('data-label', 'Good');

 // J-11 => Personalizer
 const personlizer = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(114) td:nth-child(4) .icon');
 await expect(personlizer).toBeVisible();
 await expect(personlizer).toHaveAttribute('data-label', 'Good');

 // J-12 => QnA Maker
 const qnaMaker = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(115) td:nth-child(4) .icon');
 await expect(qnaMaker).toBeVisible();
 await expect(qnaMaker).toHaveAttribute('data-label', 'Good');

 // J-13 => Speech Services
 const speechServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(117) td:nth-child(4) .icon');
 await expect(speechServ).toBeVisible();
 await expect(speechServ).toHaveAttribute('data-label', 'Good');

 // J-14 => Language service
 const langServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(118) td:nth-child(4) .icon');
 await expect(langServ).toBeVisible();
 await expect(langServ).toHaveAttribute('data-label', 'Good');

 // J-15 => Video Indexer
 const videoIndexr = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(120) td:nth-child(4) .icon');
 await expect(videoIndexr).toBeVisible();
 await expect(videoIndexr).toHaveAttribute('data-label', 'Good');

 // J-16 => Microsoft Genomics
 const microsoftGeno = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(121) td:nth-child(4) .icon');
 await expect(microsoftGeno).toBeVisible();
 await expect(microsoftGeno).toHaveAttribute('data-label', 'Good');

 // J-17 => Azure FarmBeats
 const AzFarmBeats = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(123) .status-cell .icon');
 await expect(AzFarmBeats).toBeVisible();
 await expect(AzFarmBeats).toHaveAttribute('data-label', 'Good');

 // J-18 => Azure Applied AI Services
 const AzAIServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(124) td:nth-child(4) .icon');
 await expect(AzAIServ).toBeVisible();
 await expect(AzAIServ).toHaveAttribute('data-label', 'Good');

 // J-19 => Azure Form Recognizer
 const AzFormRec = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(125) td:nth-child(4) .icon');
 await expect(AzFormRec).toBeVisible();
 await expect(AzFormRec).toHaveAttribute('data-label', 'Good');

 await page.waitForTimeout(2000);

 // J-20 => Azure Immersive Reader
 const AzImmRead = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(126) td:nth-child(4) .icon');
 await expect(AzImmRead).toBeVisible();
 await expect(AzImmRead).toHaveAttribute('data-label', 'Good');

 // J-21 => Azure Metrics Advisor
 const AzMetrics = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(127) td:nth-child(4) .icon');
 await expect(AzMetrics).toBeVisible();
 await expect(AzMetrics).toHaveAttribute('data-label', 'Good');

 // J-22 => Azure Video Analyzer
 const AzVideoAna = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(128) td:nth-child(4) .icon');
 await expect(AzVideoAna).toBeVisible();
 await expect(AzVideoAna).toHaveAttribute('data-label', 'Good');

 // J-23 => Azure Video Analyzer for Media
 const AzVideoMedia = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(129) td:nth-child(4) .icon');
 await expect(AzVideoMedia).toBeVisible();
 await expect(AzVideoMedia).toHaveAttribute('data-label', 'Good');

 //Section K - INTERNET OF THINGS
 // K-1 => Azure IoT Hub
 const AzIOTHub = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(131) td:nth-child(4) .icon');
 await expect(AzIOTHub).toBeVisible();
 await expect(AzIOTHub).toHaveAttribute('data-label', 'Good');

 // K-2 => IoT Hub Device Provisioning Service
 const IOTHubServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(133) td:nth-child(4) .icon');
 await expect(IOTHubServ).toBeVisible();
 await expect(IOTHubServ).toHaveAttribute('data-label', 'Good');

 // K-3 => Azure Time Series Insights
 const AzTimeSer = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(134) td:nth-child(4) .icon');
 await expect(AzTimeSer).toBeVisible();
 await expect(AzTimeSer).toHaveAttribute('data-label', 'Good');

 // K-4 => Event Grid
 const evtGrid = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(135) td:nth-child(4) .icon');
 await expect(evtGrid).toBeVisible();
 await expect(evtGrid).toHaveAttribute('data-label', 'Good');

 // K-5 => Logic Apps
 const logicApps = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(136) td:nth-child(4) .icon');
 await expect(logicApps).toBeVisible();
 await expect(logicApps).toHaveAttribute('data-label', 'Good');

 // K-6 => Azure IoT Central
 const AzIoTCent = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(139) td:nth-child(4) .icon');
 await expect(AzIoTCent).toBeVisible();
 await expect(AzIoTCent).toHaveAttribute('data-label', 'Good');

 // K-7 => Azure Digital Twins
 const AzDigitTw = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(141) td:nth-child(4) .icon');
 await expect(AzDigitTw).toBeVisible();
 await expect(AzDigitTw).toHaveAttribute('data-label', 'Good');

 //Section L - INTEGRATION
 // L-1 => Service Bus
 const serviceBus = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(143) td:nth-child(4) .icon');
 await expect(serviceBus).toBeVisible();
 await expect(serviceBus).toHaveAttribute('data-label', 'Good');

 // L-2 => Azure Healthcare APIs
 const AzHealthAPIs = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(144) td:nth-child(4) .icon');
 await expect(AzHealthAPIs).toBeVisible();
 await expect(AzHealthAPIs).toHaveAttribute('data-label', 'Good');

 // L-3 => Azure API for FHIR
 const AzFHIR1 = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(145) td:nth-child(4) .icon');
 await expect(AzFHIR1).toBeVisible();
 await expect(AzFHIR1).toHaveAttribute('data-label', 'Good');

 // L-4 => Azure Health Data Services
 const AzHealthDta = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(146) td:nth-child(4) .icon');
 await expect(AzHealthDta).toBeVisible();
 await expect(AzHealthDta).toHaveAttribute('data-label', 'Good');

 // L-5 => Azure API for FHIR
 const AzFHIR2 = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(147) td:nth-child(4) .icon');
 await expect(AzFHIR2).toBeVisible();
 await expect(AzFHIR2).toHaveAttribute('data-label', 'Good');

 //Section M - IDENTITY
 // M-1 => Azure Active Directory Domain Services
 const AzADServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(150) td:nth-child(4) .icon');
 await expect(AzADServ).toBeVisible();
 await expect(AzADServ).toHaveAttribute('data-label', 'Good');

 // M-2 => Enterprise State Roaming
 const enterpriseState = await page.locator('tr:nth-child(153) td:nth-child(4) .icon');
 await expect(enterpriseState).toBeVisible();
 await expect(enterpriseState).toHaveAttribute('data-label', 'Good');

 //Section N - SECURITY
 // N-1 => Key Vault
 const keyVault = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(156) td:nth-child(4) .icon');
 await expect(keyVault).toBeVisible();
 await expect(keyVault).toHaveAttribute('data-label', 'Good');

 // N-2 => Azure DDoS Protection
 const AzDDos = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(157) td:nth-child(4) .icon');
 await expect(AzDDos).toBeVisible();
 await expect(AzDDos).toHaveAttribute('data-label', 'Good');

 // N-3 => Azure Dedicated HSM
 const AzDedHSM = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(159) td:nth-child(4) .icon');
 await expect(AzDedHSM).toBeVisible();
 await expect(AzDedHSM).toHaveAttribute('data-label', 'Good');

 // N-4 => Microsoft Azure Attestation
 const microsoftAzAtt = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(162) td:nth-child(4) .icon');
 await expect(microsoftAzAtt).toBeVisible();
 await expect(microsoftAzAtt).toHaveAttribute('data-label', 'Good');

 //Section O - DEVOPS
 // O-1 => Azure DevTest Labs
 const AzDevTest = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(171) td:nth-child(4) .icon');
 await expect(AzDevTest).toBeVisible();
 await expect(AzDevTest).toHaveAttribute('data-label', 'Good');

 //Section P - MANAGEMENT AND GOVERNANCE
 // P-1 => Azure Backup
 const AzBackup = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(178) td:nth-child(4) .icon');
 await expect(AzBackup).toBeVisible();
 await expect(AzBackup).toHaveAttribute('data-label', 'Good');

 // P-2 => AutoScale
 const autoScale = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(184) td:nth-child(3) .icon');
 await expect(autoScale).toBeVisible();
 await expect(autoScale).toHaveAttribute('data-label', 'Good');

 // P-3 => Application Insights
 const appInsight = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(188) td:nth-child(4) .icon');
 await expect(appInsight).toBeVisible();
 await expect(appInsight).toHaveAttribute('data-label', 'Good');

 // P-4 => Log Analytics
 const logAnalytic = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(189) td:nth-child(4) .icon');
 await expect(logAnalytic).toBeVisible();
 await expect(logAnalytic).toHaveAttribute('data-label', 'Good');

 // P-5 => Azure Site Recovery
 const AzSiteRvry = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(190) td:nth-child(4) .icon');
 await expect(AzSiteRvry).toBeVisible();
 await expect(AzSiteRvry).toHaveAttribute('data-label', 'Good');

 // P-6 => Scheduler
 const scheduler = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(193) td:nth-child(4) .icon');
 await expect(scheduler).toBeVisible();
 await expect(scheduler).toHaveAttribute('data-label', 'Good');

 // P-7 => Automation
 const automation = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(196) td:nth-child(4) .icon');
 await expect(automation).toBeVisible();
 await expect(automation).toHaveAttribute('data-label', 'Good');

 // P-8 => Azure Chaos Studio
 const AzChaosStd = await page.locator('tr:nth-child(202) td:nth-child(4) .icon');
 await expect(AzChaosStd).toBeVisible();
 await expect(AzChaosStd).toHaveAttribute('data-label', 'Good');

 //Section Q - MEDIA
 // Q-1 => Media Services
 const mediaServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(204) td:nth-child(4) .icon');
 await expect(mediaServ).toBeVisible();
 await expect(mediaServ).toHaveAttribute('data-label', 'Good');

 //Section R - MIGRATION
 // R-1 => Azure Database Migration Service
 const AzDBMgtServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(207) td:nth-child(4) .icon');
 await expect(AzDBMgtServ).toBeVisible();
 await expect(AzDBMgtServ).toHaveAttribute('data-label', 'Good');

 //Section S - MIXED REALITY
 // S-1 => Spatial Anchors
 const specialAnch = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(209) td:nth-child(4) .icon');
 await expect(specialAnch).toBeVisible();
 await expect(specialAnch).toHaveAttribute('data-label', 'Good');

 // S-2 => Remote Rendering
 const remoteRend = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(210) td:nth-child(4) .icon');
 await expect(remoteRend).toBeVisible();
 await expect(remoteRend).toHaveAttribute('data-label', 'Good');

 //Section T - BLOCKCHAIN
 // T-1 => Azure Blockchain Service
 const AzBlockServ = await page.locator('tr:nth-child(212) td:nth-child(4) .icon');
 await expect(AzBlockServ).toBeVisible();
 await expect(AzBlockServ).toHaveAttribute('data-label', 'Good');

 //Section U - HYBRID + MULTICLOUD
 // U-1 => Azure Arc enabled servers
 const AzArcServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(217) td:nth-child(4) .icon'); 
 await expect(AzArcServ).toBeVisible();
 await expect(AzArcServ).toHaveAttribute('data-label', 'Good');

 // U-2 => Azure Arc enabled Kubernetes
 const AzArcKub = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(218) td:nth-child(4) .icon');
 await expect(AzArcKub).toBeVisible();
 await expect(AzArcKub).toHaveAttribute('data-label', 'Good');

 // U-3 => Azure Arc enabled data services
 const AzArcDtaServ = await page.locator('.status-table.region-status-table.active tbody tr:nth-child(219) td:nth-child(4) .icon');
 await expect(AzArcDtaServ).toBeVisible();
 await expect(AzArcDtaServ).toHaveAttribute('data-label', 'Good');
})
INSERT INTO cadenaServiceConfig (idConfig,idCadena,idTecnologia,url)
VALUES
      (1,1,1,'http://localhost:8003/cadena_cxf_one/services/cadena_cxf_one?wsdl') -- 'Walmart',
    , (2,4,1,'http://localhost:8000/cadena_axis_one/services/CadenaAxisOne?wsdl') --  'Libertad',
    , (3,5,2,'http://localhost:8001/cadena_rest_one/cadenaRestOne')               --  'Disco',
    , (4,2,2,'http://localhost:8002/cadena_rest_two/cadenaRestTwo') --Jumbo
    , (5,3,1,'http://localhost:8004/cadena_cxf_two/services/cadena_cxf_two?wsdl') -- Carrefour
    , (6,6,1,'http://localhost:8010/cadena_cxf_three/services/cadena_cxf_three?wsdl') -- EXTRA - OTROS3 - CXF3
--    , (6,6,2,'http://localhost:8010/cadena_rest_three/cadenaRestThree') -- EXTRA - OTROS2 - REST3
--    , (6,6,1,'http://localhost:8010/cadena_axis_two/services/CadenaAxisTwo?wsdl') -- EXTRA - OTROS - AXIS2


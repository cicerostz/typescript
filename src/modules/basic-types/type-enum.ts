export const bootstrap = ():void  => {

    
    enum OrderStatus {
        PENDING ,
        DELIVERED = 'Entregue',
        CANCELED = 'Cancelado',
    }

    console.log(OrderStatus);
    console.log(OrderStatus.CANCELED);
    //console.log('DDD', OrderStatus[5754]);


    enum OrderStatus {
        WAITTINGFORPAYMENT = 500,
        SENT  ='Enviado'
    }


    function changeOrderStatus(newStatus: OrderStatus):void{
        if(newStatus === OrderStatus.SENT){
            console.log('Pedido enviado');
        }
    }

    changeOrderStatus(OrderStatus.SENT);




}
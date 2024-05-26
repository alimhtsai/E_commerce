using Core.Entities;
using Core.Interfaces;

namespace Infrastructure.Services
{
    public class PaymentService : IPaymentService
    {
        Task<CustomerBasket> IPaymentService.CreateOrUpdatePaymentIntent(string basketId) {
            throw new NotImplementedException();
        }
    }
}
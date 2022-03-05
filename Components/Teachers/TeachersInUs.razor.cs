using akiss.Models;
using Microsoft.AspNetCore.Components;

namespace akiss.Components.Teachers;

public partial class TeachersInUs : ComponentBase
{
    public List<TeachersInUsCardModel> TeachersInUsCards { get; set; } = new()
    {
        new TeachersInUsCardModel()
        {
            Title = "Sitatli",
            Description = "Darsingiz sifatini oshiring va o'quvchilaringiz natijalarini yaxshilang",
            Icon = "bx bx-task"
        },
        new TeachersInUsCardModel()
        {
            Title = "Qiziqarli",
            Description = "Dars jarayoniga qiziqarli elementlar qo'shing va o'quvchilarni jalb eting",
            Icon = "bx bx-planet"
        },
        new TeachersInUsCardModel()
        {
            Title = "Masofaviy",
            Description = "Masofaviy ta'lim uchun video kontentlar yarating va auditoriyangizni kengaytiring",
            Icon = "bx bx-building-house"
        },
        new TeachersInUsCardModel()
        {
            Title = "Ustama",
            Description = "Malakangizni oshiring va maoshingizga 35~100% qo'shing",
            Icon = "bx bx-wallet-alt"
        }
    };
    
    
}
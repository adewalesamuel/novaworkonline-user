import { useCallback, useEffect, useState } from "react";
import { Services } from "../services";
import { Utils } from "../utils";
import { Hooks } from "../hooks";

export function JobTitleListView(props) {
    let abortController = new AbortController(

    );
    const { SubscriptionPackService, UserService } = Services;

    const useSubscription = Hooks.useSubscription();

    const [job_title, setJob_title] = useState({});
    const [subscription_packs, setSubscription_packs] = useState([]);
    const [, setIsLoading] = useState(true);
    const [user, setUser] = useState('');

    const handleSubscriptionPackClick = async (e, amount) => {
        e.preventDefault();

        useSubscription.setAmount(amount);
        useSubscription.setPayment_mode('mobile');
        useSubscription.setSubscription_pack_id(subscription_packs[0].id);

        try {
            const {isConfirmed} = await Utils.SweetAlert
            .firePaymentConfirm(amount);

            if (isConfirmed) {
                useSubscription.setIsDisabled(true);

                const paymentData = {
                    amount: amount,
                    user: Utils.Auth.getUser(),
                    pack: subscription_packs[0] 
                }

                const cinetPay = Utils.Payment.CinetPay.getCheckout(paymentData);

                cinetPay.waitResponse(async (data) => {
                    if (data.status === "REFUSED") {
                        console.log("Votre paiement a échoué");
                    } else if (data.status === "ACCEPTED") {
                        const payload = {
                            amount: amount,
                            payment_mode: 'mobile',
                            subscription_pack_id: subscription_packs[0].id
                        }

                        setIsLoading(true);
        
                        await Services.SubscriptionService.create(JSON.stringify(payload), 
                        new AbortController().signal);

                        alert(`Votre paiement a été effectué avec succès. 
                        Vous serez contacté sous 8 `)
                        window.location.assign('/');
                    }
                });

                cinetPay.onError(data => {
                    console.log(data);
                    alert('Une erreur est survenue. Veuillez réessayer plus tard')
                });
            }
        } catch (error) {
            console.log(error);
        }finally{
            useSubscription.setIsDisabled(false);
        }
    }

    const init = useCallback(async () => {
        try {
            const {subscription_packs} = await SubscriptionPackService.getAll(
                abortController.signal);
            setSubscription_packs(subscription_packs);

            const {job_title} = await Services.JobTitleService
            .getUserJobTitle(abortController.signal);
            setJob_title(job_title);

            const {user} = await UserService.getProfile(abortController.signal);
            setUser(user);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        };
    }, [])

    useEffect(() => {
        init();

        return () => {
            abortController.abort();
            abortController = new AbortController();
        }
    }, [init])

    return (
        <>
            <div className="slim-pageheader">
                <ol className="breadcrumb slim-breadcrumb">
                </ol>
                <h6 className="slim-pagetitle">Domaine d'activité: {job_title.name}</h6>
            </div>
            <div className="">
                <div className="card card-pricing-one">
                    <div className="row">
                        <div className="col-12 mb-5 text-center">
                            {!user?.course_login && 
                                <button className="btn btn-primary rounded-pill px-3" 
                                onClick={e => handleSubscriptionPackClick(e, job_title.course_price)}>
                                    PAYER MA FORMATION
                                </button>
                                }
                                {user?.course_login && 
                                     <a className="btn btn-primary rounded-pill px-3" 
                                     href={job_title.course_link_url} target="_blank" rel='noreferrer'>
                                         ACCEDER À MA FORMATION
                                     </a>
                                }
                        </div>

                        {user?.course_login &&  
                            <div className="col-12 col-md-8">
                                <h2 className="mb-3">Accèss</h2>
                                <div className="py-1">
                                    <strong>Login :</strong>
                                    <span>{user?.course_login}</span>
                                </div>
                                <div className="py-1">
                                    <strong>Mot de passe :</strong>
                                    <span>{user?.course_password}</span>
                                </div>
                            </div>
                        }

                    </div>
                </div>
            </div>
        </>
    )
}
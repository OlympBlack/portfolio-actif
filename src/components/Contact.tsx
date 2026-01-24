import { type FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

export const Contact = () => {
    const [loading, setLoading] = useState(false);

    const sendMail = (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);
        const form = e.target as HTMLFormElement;

        const params = {
            name: (form.elements.namedItem('name') as HTMLInputElement).value,
            email: (form.elements.namedItem('email') as HTMLInputElement).value,
            message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        };

        const serviceID = "service_v710175";
        const templateID = "template_1v1d3tq";

        emailjs.send(serviceID, templateID, params, "nzcWKfFmpO6dMqc5f")
            .then(() => {
                setLoading(false);
                form.reset();
                Swal.fire({
                    title: "Succès!",
                    text: "Votre message a été envoyé avec succès.",
                    icon: "success",
                    customClass: {
                        popup: "bg-card text-card-foreground border border-border rounded-lg shadow-xl",
                        title: "text-foreground",
                        confirmButton: "bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
                    },
                    buttonsStyling: false
                });
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
                Swal.fire({
                    title: "Erreur",
                    text: "Une erreur s'est produite. Veuillez réessayer.",
                    icon: "error",
                    customClass: {
                        popup: "bg-card text-card-foreground border border-border rounded-lg shadow-xl",
                        title: "text-destructive",
                        confirmButton: "bg-destructive text-destructive-foreground px-4 py-2 rounded-lg hover:bg-destructive/90 transition-colors"
                    },
                    buttonsStyling: false
                });
            });
    };

    return (
        <section id="contact" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold mb-12 text-center text-foreground" data-aos="fade-up">Me Contacter</h2>
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
                    <div className="space-y-8" data-aos="fade-right">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <i className="fas fa-envelope text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                                <a href="mailto:juleschristgbassi9@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">juleschristgbassi9@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <i className="fas fa-phone text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">Téléphone</h4>
                                <p className="text-muted-foreground">+229 01 54 47 00 02</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <i className="fab fa-linkedin text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">LinkedIn</h4>
                                <a href="https://www.linkedin.com/in/jules-christ-gbassi-847bb5314/" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Mon profil</a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                                <i className="fab fa-github text-xl"></i>
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground mb-1">GitHub</h4>
                                <a href="https://github.com/OlympBlack" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">Mon portfolio</a>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={sendMail} className="space-y-6" data-aos="fade-left">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Nom complet</label>
                            <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted-foreground/50" placeholder="Votre nom" />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
                            <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted-foreground/50" placeholder="votre@email.com" />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
                            <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-muted-foreground/50" placeholder="Votre message..."></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <>
                                    <i className="fas fa-spinner fa-spin"></i> Envoi...
                                </>
                            ) : 'Envoyer le message'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};
